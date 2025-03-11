import { useEffect, useState } from 'react';
import { Button } from 'antd';
const Blog = () => {
    const [loading, setLoading] = useState(false);
    const [selectedTag, setSelectedTag] = useState('All Posts'); // 选中状态
    const [blogData, setBlogData] = useState({
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

    return (
        <>
            <section className='text-[#0A0B11] w-full max-w-[1920px] mx-auto min-h-screen box-border relative overflow-hidden bg-[#FFF]'>
                <div className='px-[clamp(40px,13%,250px)] py-[60px] w-full box-border'>
                    <div className="w-full flex">
                        <div className='w-[40%]'>
                            <div className='font-sora font-[700] text-[40px] uppercase inline-block z-[9999999]'>
                                {blogData.title}
                            </div>
                            <div className='w-[600px] mt-[10px]'>
                                {blogData.subtitle}
                            </div>
                        </div>
                        <div className='w-[60%]'>
                            <img className='w-full' src={blogData.bannerImage} alt="Blog Banner" />
                        </div>
                    </div>
                </div>

                <div className='px-[clamp(40px,16%,310px)] w-full box-border'>
                    <div className="w-full mt-[100px]">
                        <div className="flex gap-[30px]">
                            {blogTags.map((tag) => (
                                <div
                                    key={tag}
                                    onClick={() => setSelectedTag(tag)}
                                    className={`py-[18px] px-[40px] rounded-[100px] cursor-pointer transition-all duration-300
                                        ${selectedTag === tag
                                            ? 'bg-[#0A0B11] text-[#FFFFFF]'
                                            : 'bg-[#F5F7F9] text-[#0A0B11] hover:bg-[#E5E7E9]'
                                        }`}
                                >
                                    {tag}
                                </div>
                            ))}
                        </div>

                        <div className="w-full mt-[60px]">
                            <div className="grid grid-cols-3 gap-[10px]">
                                {blogList.map((blog, index) => (
                                    <div key={index} className="flex flex-col cursor-pointer hover:shadow-lg transition-all duration-300">
                                        <img
                                            src={blog.image}
                                            alt={blog.title}
                                            className="w-full h-[200px] object-cover rounded-t-[8px]"
                                        />
                                        <div className="p-[20px] flex flex-col gap-[10px]">
                                            <h3 className="text-[18px] font-[600] line-clamp-2">
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



                        <div>

                        </div>
                    </div>

                    <div className='flex flex-col my-[170px] justify-center items-center relative gap-y-[60px]'>
                        <div className='text-[42px] font-[700] text-center space-y-[10px] leading-[1] relative'>
                            <img className='w-[52px] h-auto object-contain absolute right-[-20%] top-[-80%]' src="/images/black-red-icon.png" alt="" />
                            Business Scenario
                        </div>
                        <Button className='font-[700] px-[25px] py-[17px] h-[46px] w-[160px]' color="danger" variant="solid" shape="round" size='large'>
                            Try now
                        </Button>
                    </div>
                </div>
            </section>

        </>
    );
};

export default Blog;

