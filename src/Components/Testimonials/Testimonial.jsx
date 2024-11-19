// import React from "react";
import testimonialCSS from './../Testimonials/Testimonial.module.css';
import { Swiper, SwiperSlide } from "swiper/react";
import 'swiper/css';
import { Autoplay } from "swiper/modules";
import user1 from './../../assets/user1.jpg';
import user2 from './../../assets/user2.jpg';
import user3 from './../../assets/user3.jpg';
import user4 from './../../assets/user4.jpg';
import quote from './../../assets/quote.svg';

function Testimonial () {
    return (
        <div className={`${testimonialCSS.TestimonialWrapper} section`} id="testimonial">
            <h2>Cảm nhận của học viên như thế nào khi học tại PTIT?</h2>
            <p className={testimonialCSS.pera}>
                Đánh giá của các học viên nhóm 6
            </p>
            <Swiper 
                className={testimonialCSS.swiper}
                spaceBetween={30}
                slidesPerView={3}
                breakpoints={
                    {
                        0: {
                            slidesPerView: 1
                        },
                        768: {
                            slidesPerView: 2
                        },
                        1200: {
                            slidesPerView: 3
                        }
                    }
                }
                loop={true}
                autoplay={{
                    delay: 2500,
                }}
                modules={[Autoplay]}
            >
                <SwiperSlide>
                    <div className={testimonialCSS.Testimonial}>
                        <div className={testimonialCSS.profile}>
                            <img src={user1} alt="" className={testimonialCSS.user}/>
                            <h3>Tấn Phát<span>N24DCPT110</span></h3>
                            <img src={quote} alt="" className={testimonialCSS.quote}/>
                        </div>
                        <p>PTIT là môi trường tốt để em phát triển và học tập</p>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className={testimonialCSS.Testimonial}>
                        <div className={testimonialCSS.profile}>
                            <img src={user2} alt="" className={testimonialCSS.user}/>
                            <h3>Thành Nhân<span>N24DCPT110</span></h3>
                            <img src={quote} alt="" className={testimonialCSS.quote}/>
                        </div>
                        <p>PTIT là ngôi trường có truyền thống lâu đời và có chất lượng đào tạo tốt</p>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className={testimonialCSS.Testimonial}>
                        <div className={testimonialCSS.profile}>
                            <img src={user3} alt="" className={testimonialCSS.user}/>
                            <h3>Yến Nhi<span>N24DCPT110</span></h3>
                            <img src={quote} alt="" className={testimonialCSS.quote}/>
                        </div>
                        <p>Các thầy cô ở PTIT dạy rất nhiệt tình và dễ hiểu</p>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className={testimonialCSS.Testimonial}>
                        <div className={testimonialCSS.profile}>
                            <img src={user4} alt="" className={testimonialCSS.user}/>
                            <h3>Hà Linh<span>N24DCPT110</span></h3>
                            <img src={quote} alt="" className={testimonialCSS.quote}/>
                        </div>
                        <p>PTIT là nơi đào tạo ngành CNTT hàng đầu VN</p>
                    </div>
                </SwiperSlide>
            </Swiper>
        </div>
    )
}

export default Testimonial;