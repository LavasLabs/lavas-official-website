import { useEffect, useState } from 'react';
import { Button, message } from 'antd';
import useGlobalStore from '../../store/useGlobalStore';

const Blog = () => {
    const { isMobile } = useGlobalStore();
    const [selectedTag, setSelectedTag] = useState('All Posts');
    const [blogData] = useState({
        title: 'Lavas Labs BLOG',
        subtitle: 'Legal and compliance updates, company news and media coverage.',
        bannerImage: '/images/blog-banner.png'
    });


    useEffect(() => {

    }, []);

    const blogTags = [
        'All Posts',
        'Announcement',
        'Blog',
        'Media',
    ];

    const blogList = [
        {
            image: '/images/blog-banner.png',
            title: 'Lavas Labs Announces Global Expansion',
            description: 'Lavas Labs continues its global expansion with new office openings in key markets...',
            date: '2024-03-05'
        },
        {
            image: '/images/blog-banner.png',
            title: 'New Features Release',
            description: 'Introducing our latest features designed to enhance your business operations...',
            date: '2024-03-04'
        },
    ];



    // if (loading) {
    //     return <div className="w-full min-h-screen flex items-center justify-center">Loading...</div>;
    // }

    const [messageApi, contextHolder] = message.useMessage();
    
    return (
        <>
            {contextHolder}
            <section className={`text-[#0A0B11] w-full max-w-[1920px] mx-auto box-border relative overflow-hidden bg-[#FFF] ${isMobile ? '' : 'min-h-screen'}`}>
                <div className={`w-full box-border ${isMobile ? 'px-[20px] pb-[40px] pt-[20px]' : 'px-[clamp(40px,13%,250px)] py-[60px]'}`}>
                    <div className={`w-full ${isMobile ? 'flex flex-col gap-[30px]' : 'flex'}`}>
                        <div className={isMobile ? 'w-full text-center' : 'w-[45%]'}>
                            <div className={`font-sora font-[900] uppercase inline-block z-[9999999] ${isMobile ? 'text-[32px]' : 'text-[clamp(40px,5vw,50px)]'}`}>
                                {blogData.title}
                            </div>
                            <div className={`mt-[10px] ${isMobile ? 'text-[14px] px-[20px] box-border' : ''}`}>
                                {blogData.subtitle}
                            </div>
                        </div>
                        <div className={isMobile ? 'w-full' : 'w-[60%]'}>
                            <img className='w-full' src={blogData.bannerImage} alt="Blog Banner" />
                        </div>
                    </div>
                </div>

                <div className={`w-full box-border ${isMobile ? 'px-[20px]' : 'px-[clamp(40px,16%,310px)]'}`}>
                    <div className={`w-full ${isMobile ? 'mt-[40px]' : 'mt-[100px]'}`}>
                        <div className={`flex ${isMobile ? 'flex-wrap gap-[10px]' : 'gap-[30px]'}`}>
                            {blogTags.map((tag) => (
                                <div
                                    key={tag}
                                    onClick={() => setSelectedTag(tag)}
                                    className={`cursor-pointer transition-all duration-300 ${isMobile ? 'py-[12px] px-[20px] text-[14px]' : 'py-[18px] px-[40px]'} rounded-[100px]
                                        ${selectedTag === tag
                                            ? 'bg-[#0A0B11] text-[#FFFFFF]'
                                            : 'bg-[#F5F7F9] text-[#0A0B11] hover:bg-[#E5E7E9]'
                                        }`}
                                >
                                    {tag}
                                </div>
                            ))}
                        </div>

                        <div className={`w-full ${isMobile ? 'mt-[30px]' : 'mt-[60px]'}`}>
                            <div className={`grid gap-[10px] ${isMobile ? 'grid-cols-1' : 'grid-cols-3'}`}>
                                {blogList.map((blog, index) => (
                                    <div key={index} className="flex flex-col cursor-pointer hover:shadow-lg transition-all duration-300">
                                        <div className={`flex flex-col gap-[10px] ${isMobile ? 'p-[15px]' : 'p-[20px]'}`}>
                                            <h3 className={`font-[600] line-clamp-2 ${isMobile ? 'text-[16px]' : 'text-[18px]'}`}>
                                                {blog.title}
                                            </h3>
                                            <p className="text-[14px] text-[#666] line-clamp-3">
                                                {blog.description}
                                            </p>
                                            <time className="text-[12px] text-[#999]">
                                                {blog.date}
                                            </time>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                    <div className={`flex flex-col justify-center items-center relative gap-y-[60px] ${isMobile ? 'my-[60px]' : 'my-[170px]'}`}>
                        <div className={`font-[700] text-center leading-[1] relative ${isMobile ? 'text-[24px]' : 'text-[42px] space-y-[10px]'}`}>
                            <img className={`h-auto object-contain absolute ${isMobile ? 'w-[30px] right-[-40px] top-[-30px]' : 'w-[52px] right-[-20%] top-[-80%]'}`} src="/images/black-red-icon.png" alt="" />
                            Business Scenario
                        </div>
                        <Button 
                            className={`font-[700] h-[46px] ${isMobile ? 'px-[20px] py-[12px] w-[140px]' : 'px-[25px] py-[17px] w-[160px] !bg-[#D11616] hover:!bg-[#ff1818] hover:!border-[#ff1818]'}`}
                            color="danger" 
                            variant="solid" 
                            shape="round" 
                            size='large'
                            onClick={() => messageApi.info('This function is not enabled. Please contact the administrator')}
                        >
                            Try now
                        </Button>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Blog;

