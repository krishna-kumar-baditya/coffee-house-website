import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import { Pagination, Navigation } from "swiper/modules";
import BlogCard from "../BlogCard/BlogCard";

import "./Blog.css";
import { Box, Typography } from "@mui/material";
export default function Blog() {
    return (
        <>
            <Box className='blog-container'>
                <Box className='blog-header'>
                    <Typography variant="h2">Blogs</Typography>
                </Box>
                <Swiper
                    slidesPerView={1}
                    spaceBetween={30}
                    loop={true}
                    autoplay={{
                        delay: 1000,
                        disableOnInteraction: false,
                    }}
                    pagination={{
                        clickable: true,
                    }}
                    navigation={true}
                    modules={[ Navigation]}
                    className="blogSwiper"
                    breakpoints={{
                            
                            
                        768: {
                            slidesPerView: 2, 
                            spaceBetween: 30,
                        },
                        1024: {
                            slidesPerView: 3, 
                            spaceBetween: 30,
                        },
                        
                    }}
                >
                    <SwiperSlide>
                        <BlogCard id='1' image={'./images/blog-1.png'} title='Watch sdedn nises'/>
                    </SwiperSlide>
                    <SwiperSlide>
                        <BlogCard id='2' image={'./images/blog-2.png'} title='Smgori tuin nibes kninwe'/>
                    </SwiperSlide>
                    <SwiperSlide>
                        <BlogCard id='3' image={'./images/blog-3.png'} title='Minis mnies anide ewnis'/>
                    </SwiperSlide>
                    <SwiperSlide>
                        <BlogCard id='4' image={'./images/blog-4.png'} title='Jininsi smart watch mnisyh nise'/>
                    </SwiperSlide>
                </Swiper>
            </Box>
        </>
    );
}
