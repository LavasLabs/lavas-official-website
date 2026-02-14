import { useEffect, useState } from 'react';
import { Button, Form, Input, Select, Space, message } from 'antd';
import { useTranslation } from 'react-i18next';
import useGlobalStore from '../../store/useGlobalStore';
import { assetPath } from '../../utils/assetPath';

const Partner = () => {
    const { isMobile } = useGlobalStore();
    const { t } = useTranslation('partner');
    const [loading, setLoading] = useState(false);
    const [form] = Form.useForm();
    const [messageApi, contextHolder] = message.useMessage();

    const onFinish = (values: any) => {
        console.log(values);
        setLoading(true);
        setTimeout(() => {
            messageApi.info(t('messages.functionNotEnabled', { ns: 'components' }));
            setLoading(false);
        }, 500);
    };

    const securityCards = t('compliance.cards', { returnObjects: true }) as Array<{
        title: string;
        description: string;
    }>;

    const collaborationTypes = [
        { value: 'business', label: t('form.collaborationTypes.business') },
        { value: 'technology', label: t('form.collaborationTypes.technology') },
        { value: 'marketing', label: t('form.collaborationTypes.marketing') }
    ];

    useEffect(() => {

    }, []);

    return (
        <section className='w-full relative'>
            {contextHolder}
            <div
                className={`relative w-full h-auto bg-contain bg-no-repeat ${isMobile ? 'pt-[54%]' : 'pt-[100px]'}`}
                style={{ backgroundImage: `url(${isMobile ? assetPath('/images/partner-banner-mobile.png') : assetPath('/images/partner-banner.png')})` }}
            >
                <div className={`max-w-[1920px] mx-auto text-[#FFF] ${isMobile ? 'pt-[4%] pb-[6%] px-[30px]' : 'pt-[4%] pb-[10%] pr-[clamp(40px,13%,250px)] pl-[30%] text-right'}`}>
                    <div className={`font-bold tracking-[0.03em] font-roboto  uppercase [text-shadow:0px_4px_10px_rgba(0,0,0,0.5)] [-webkit-text-stroke:1px]  ${isMobile ? 'leading-[115%] text-[28px] text-center' : 'leading-[90%] text-[clamp(32px,5vw,60px)] text-right'}`}>{t('hero.title')}</div>
                    <div className={`text-[14px] mt-[24px] [text-shadow:0px_4px_10px_rgba(0,0,0,0.5)] [-webkit-text-stroke:0.2px]  ${isMobile ? 'hidden' : ''}`}>{t('hero.subtitle')}</div>
                </div>

                <div className={`max-w-[1920px] mx-auto w-full flex flex-col justify-center box-border ${isMobile ? 'px-[30px] gap-y-[60px]' : 'px-[clamp(40px,16%,310px)] gap-y-[170px]'}`}>
                    <div className={`w-full mx-auto bg-[#FFF] rounded-[24px] bg-white shadow-[0px_10px_80px_0px_rgba(0,0,0,0.10)] box-border ${isMobile ? 'p-[20px]' : 'p-[40px]'}`}>
                        <h2 className={`font-bold text-center mb-4 ${isMobile ? 'text-[24px]' : 'text-[32px]'}`}>{t('form.title')}</h2>
                        <p className={`text-center text-gray-600 ${isMobile ? 'mb-[20px] text-[14px]' : 'mb-[40px]'}`}>
                            {t('form.subtitle')}
                        </p>
                        <Form
                            form={form}
                            layout="vertical"
                            onFinish={onFinish}
                        >
                            <div className={`grid ${isMobile ? 'grid-cols-1 gap-y-[10px]' : 'grid-cols-2 gap-x-[20px] gap-y-[12px]'}`}>
                                <Form.Item
                                    name="firstName"
                                    label={<span>{t('form.fields.firstName')}<span className='text-red-500'>*</span></span>}
                                    rules={[{ required: true, message: t('form.validation.firstName') }]}
                                >
                                    <Input placeholder={t('form.placeholders.firstName')} className={`rounded-[8px] ${isMobile ? 'h-[40px]' : 'h-[48px]'}`} />
                                </Form.Item>

                                <Form.Item
                                    name="lastName"
                                    label={<span>{t('form.fields.lastName')}<span className='text-red-500'>*</span></span>}
                                    rules={[{ required: true, message: t('form.validation.lastName') }]}
                                >
                                    <Input placeholder={t('form.placeholders.lastName')} className={`rounded-[8px] ${isMobile ? 'h-[40px]' : 'h-[48px]'}`} />
                                </Form.Item>

                                <Form.Item
                                    name="email"
                                    label={<span>{t('form.fields.email')}<span className='text-red-500'>*</span></span>}
                                    rules={[
                                        { required: true, message: t('form.validation.email') },
                                        { type: 'email', message: t('form.validation.emailInvalid') }
                                    ]}
                                >
                                    <Input placeholder={t('form.placeholders.email')} className={`rounded-[8px] ${isMobile ? 'h-[40px]' : 'h-[48px]'}`} />
                                </Form.Item>

                                <Form.Item
                                    name="phone"
                                    label={<span>{t('form.fields.phone')}<span className='text-red-500'>*</span></span>}
                                    rules={[{ required: true, message: t('form.validation.phone') }]}
                                >
                                    <Input
                                        addonBefore={"+852"}
                                        placeholder={t('form.placeholders.phone')}
                                        className={`${isMobile ? 'h-[40px]' : 'h-[48px]'}`}
                                    />
                                </Form.Item>

                                <Form.Item
                                    name="companyName"
                                    label={t('form.fields.companyName')}
                                >
                                    <Input placeholder={t('form.placeholders.companyName')} className={`rounded-[8px] ${isMobile ? 'h-[40px]' : 'h-[48px]'}`} />
                                </Form.Item>

                                <Form.Item
                                    name="companyWebsite"
                                    label={t('form.fields.companyWebsite')}
                                >
                                    <Input placeholder={t('form.placeholders.companyWebsite')} className={`rounded-[8px] ${isMobile ? 'h-[40px]' : 'h-[48px]'}`} />
                                </Form.Item>

                                <Form.Item
                                    name="collaborationType"
                                    label={<span>{t('form.fields.collaborationType')}<span className='text-red-500'>*</span></span>}
                                    rules={[{ required: true, message: t('form.validation.collaborationType') }]}
                                >
                                    <Select
                                        placeholder={t('form.placeholders.collaborationType')}
                                        className={`${isMobile ? 'h-[40px]' : 'h-[48px]'}`}
                                        options={collaborationTypes}
                                    />
                                </Form.Item>

                                <Form.Item
                                    name="message"
                                    label={t('form.fields.message')}
                                >
                                    <Input.TextArea
                                        placeholder={t('form.placeholders.message')}
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
                                    {t('form.submit')}
                                </Button>
                            </Form.Item>
                        </Form>
                    </div>

                    <div className='w-full flex flex-col text-[#0A0B11]'>
                        <Space direction='vertical'>
                            <div className={`font-[700] ${isMobile ? 'text-[30px] text-center' : 'text-[clamp(32px,5vw,60px)]'}`}>{t('vision.title')}</div>
                            <div className={isMobile ? 'text-[14px] text-center' : ''}>{t('vision.description')}</div>
                        </Space>
                        <img
                            className={`w-full rounded-[20px] ${isMobile
                                    ? 'my-[20px] h-[200px] object-cover object-[50%_50%]'
                                    : 'my-[40px] object-contain'
                                }`}
                            src={assetPath('/images/partner-vision.png')}
                            alt=''
                        />

                        <div className={`w-full ${isMobile ? 'flex flex-col gap-[20px]' : 'flex justify-between'}`}>
                            <div className={isMobile ? 'w-full' : 'w-[50%]'}>
                                <div className='font-[700] relative'>
                                    <img className={`h-auto object-contain absolute left-[0px] top-[0px] ${isMobile ? 'w-[12px]' : 'w-[16px]'}`} src={assetPath('/images/text-front-icon.png')} alt="" />
                                    <span className={`z-[999999] relative ${isMobile ? 'text-[16px]' : 'text-[20px]'}`}>{t('vision.cryptoPioneers.title')}</span>
                                </div>
                                <div className={`opacity-50 mt-[8px] ${isMobile ? 'text-[14px]' : ''}`}>
                                    {t('vision.cryptoPioneers.description')}
                                </div>
                            </div>
                            <div className={isMobile ? 'w-full' : 'w-[50%]'}>
                                <div className='font-[700] relative'>
                                    <img className={`h-auto object-contain absolute left-[0px] top-[0px] ${isMobile ? 'w-[12px]' : 'w-[16px]'}`} src={assetPath('/images/text-front-icon.png')} alt="" />
                                    <span className={`z-[999999] relative ${isMobile ? 'text-[16px]' : 'text-[20px]'}`}>{t('vision.digitalPayment.title')}</span>
                                </div>
                                <div className={`opacity-50 mt-[8px] ${isMobile ? 'text-[14px]' : ''}`}>
                                    {t('vision.digitalPayment.description')}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className={`max-w-[1920px] mx-auto w-full flex flex-col justify-center box-border relative ${isMobile ? 'py-[60px]' : 'py-[170px]'}`}>
                    <div className={`relative w-full box-border ${isMobile ? 'pr-[60px]' : 'pr-[clamp(40px,16%,310px)]'}`}>
                        <div className='border-t-[3px] border-[#0A0B11] w-[40%] absolute top-[30px] left-[0px] relative'>
                            <img className={`h-auto object-contain absolute right-[-2px] top-[-10px] ${isMobile ? 'w-[12px]' : 'w-[16px]'}`} src={assetPath('/images/text-front-icon.png')} alt="" />
                        </div>
                        <div className={`font-[700] ml-[32px] text-right text-[clamp(32px,4vw,50px)] ${isMobile ? 'hidden' : ''}`}>{t('compliance.title')}</div>
                    </div>
                    <div className={`w-full box-border flex flex-col text-[#0A0B11] ${isMobile ? 'px-[0px]' : 'px-[clamp(40px,16%,310px)]'}`}>
                        <div className={`text-right font-[700] mt-[12px] ${isMobile ? 'text-[22px] mb-[30px] px-[30px] box-border w-[80%] ml-auto' : 'text-[clamp(24px,3vw,40px)] mb-[60px]'}`}>
                            {t('compliance.subtitle')}
                        </div>

                        <div className={`w-full ${isMobile ? 'flex flex-col gap-[20px] px-[40px] box-border justify-center items-center' : 'flex gap-[30px]'}`}>
                            {securityCards.map((card, index) => (
                                <div key={index} className={`flex flex-col ${isMobile ? 'w-[80%]' : 'w-[calc(100%/3-30px)]'}`}>
                                    <img 
                                        className={`object-cover rounded-[16px] ${isMobile ? 'w-full h-[160px] mb-[16px]' : 'w-full h-[200px] mb-[24px]'}`} 
                                        src={assetPath(`/images/partner-b${index + 1}.png`)} 
                                        alt={card.title} 
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