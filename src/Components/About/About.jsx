// import React from "react";
import aboutCSS from './../About/About.module.css';
import aboutImg from './../../assets/about.jpg'

function About () {
    return (
        <div className={`${aboutCSS.AboutWrapper} section`} id="about">
            <div className={aboutCSS.aboutContainer}>
                <h2>Giới thiệu về PTIT</h2>
                <p>Học viện đào tạo có bề dày và chất lượng đào tạo trong lĩnh vực này, đặc biệt trong lĩnh vực Công nghệ thông tin, Điện tử viễn thông, bao gồm cả
                    Trí tuệ nhân tạo, Vi mạch bán dẫn, An toàn thông tin, Khoa học và kỹ thuật dữ liệu, Truyền thông đa phương tiện,...
                </p>
                <div className={aboutCSS.Skills}>
                    <h2>Thành tích</h2>
                    <p>Học viện là một trong 7 trường Đại học đào tạo nguồn nhân lực An toàn thông tin trọng điểm Quốc gia, là một
                        trong 5 trường Đại học thuộc liên minh các Cơ sở giáo dục đào tạo ngành Vi mạch bán dẫn.
                    </p>
                    <div className={aboutCSS.skillWrapper}>
                        <div className={aboutCSS.skill}>
                            <h3>Công nghệ thông tin</h3>
                            <div className={aboutCSS.line}></div>
                        </div>
                        <div className={aboutCSS.skill}>
                            <h3>An toàn thông tin</h3>
                            <div className={aboutCSS.line}></div>
                        </div>
                        <div className={aboutCSS.skill}>
                            <h3>Kỹ thuật Điện tử viễn thông</h3>
                            <div className={aboutCSS.line}></div>
                        </div>
                        <div className={aboutCSS.skill}>
                            <h3>Công nghệ Internet vạn vật IOT</h3>
                            <div className={aboutCSS.line}></div>
                        </div>
                        <div className={aboutCSS.skill}>
                            <h3>Công nghệ đa phương tiện</h3>
                            <div className={aboutCSS.line}></div>
                        </div>
                        <div className={aboutCSS.skill}>
                            <h3>Kỹ thuật Điều khiển và tự động hóa</h3>
                            <div className={aboutCSS.line}></div>
                        </div>
                    </div>
                </div>
            </div>

            <div className={aboutCSS.AboutImg}>
                <img src={aboutImg} alt="" />
                <div className={aboutCSS.Exp}>
                    <h2><span>PTIT</span> tuyển sinh</h2>
                </div>
            </div>
        </div>
    );
}

export default About;