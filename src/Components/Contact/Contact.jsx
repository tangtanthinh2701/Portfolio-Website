// import React from "react";
import contactCSS from "./../Contact/Contact.module.css";

function Contact () {
    return (
        <div className={`${contactCSS.ContactWrapper} section`} id="contact">
            <h2>Liên hệ</h2>
            <p className={contactCSS.pera}>Học Viện Công Nghệ Bưu Chính Viễn Thông Cơ Sở TP. Hồ Chí Minh</p>
            <div className={contactCSS.ContactContainer}>
                <div className={contactCSS.ContactInfo}>
                    <div className={contactCSS.card}>
                        <i className="ri-phone-line"></i>
                        <h3>028 3829 7220</h3>
                    </div>
                    <div className={contactCSS.card}>
                        <i className="ri-mail-line"></i>
                        <h3>tuyensinh@ptithcm.edu.vn</h3>
                    </div>
                    <div className={contactCSS.card}>
                        <i className="ri-map-pin-line"></i>
                        <h3>11 Nguyễn Đình Chiểu, Đa Kao, Quận 1, Thành phố Hồ Chí Minh, Ho Chi Minh City, Vietnam</h3>
                    </div>
                </div>
                <div className={contactCSS.Contactform}>
                    <h3>Liên lạc</h3>
                    <div className={contactCSS.inputWrapper}>
                        <input type="text" placeholder="Name *"/>
                    </div>
                    <div className={contactCSS.inputWrapper}>
                        <input type="email" placeholder="Email *"/>
                    </div>
                    <textarea placeholder="Message"></textarea>
                    <button>
                        Submit
                        <span></span>
                        <span></span>
                        <span></span>
                        <span></span>
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Contact;