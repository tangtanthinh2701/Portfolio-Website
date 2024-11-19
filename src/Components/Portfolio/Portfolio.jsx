// import React from "react";
import portfolioCSS from "./../Portfolio/Portfolio.module.css";
import { SwiperSlide, Swiper }  from "swiper/react";
import "swiper/css";
import { Autoplay } from "swiper/modules"

function Portfolio () {
    return (
        <div className={`${portfolioCSS.portfolioWrapper} section`} id="portfolio">
            <h2>Ngành Công nghệ đa phương tiện</h2>
            <p className={portfolioCSS.pera}>
                Gồm có hai chuyên ngành Phát triển ứng dụng đa phương tiện,
                Thiết kế đa phương tiện, không xét tuyển theo chuyên ngành, khi vào sinh viên tự chọn chuyên Ngành
            </p>
            <h3>Mã ngành: 7329001</h3>
            <p>Khối lượng chương trình: 152 tín chỉ</p>
            <Swiper className={portfolioCSS.swiper}
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
                        1024: {
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
                    <div className={`${portfolioCSS.Card} ${portfolioCSS.Card1}`}>
                        <div className={portfolioCSS.content}>
                            <h2>Nhiếp ảnh</h2>
                            <h3>Nhiếp ảnh</h3>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className={`${portfolioCSS.Card} ${portfolioCSS.Card2}`}>
                        <div className={portfolioCSS.content}>
                            <h2>Lập trình Java</h2>
                            <h3>Java</h3>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className={`${portfolioCSS.Card} ${portfolioCSS.Card3}`}>
                        <div className={portfolioCSS.content}>
                            <h2>Lập trình Mobile</h2>
                            <h3>Mobile</h3>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className={`${portfolioCSS.Card} ${portfolioCSS.Card4}`}>
                        <div className={portfolioCSS.content}>
                            <h2>Truyền thông</h2>
                            <h3>Truyền thông</h3>
                        </div>
                    </div>
                </SwiperSlide>
            </Swiper>
        </div>
    )
}

export default Portfolio;