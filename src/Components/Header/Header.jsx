// import React from "react";
import headerCSS from './../Header/Header.module.css';
import logoImg from './../../assets/logo.png';

function Header () {
    return (
        <div className={headerCSS.headerWrapper} id="home">
            <div className={headerCSS.headerContainer}>
                <img src={logoImg} alt="Logo-img" />
                <h1>Xin chào mình là <span>PTIT</span></h1>
                <p>Chào mừng bạn đến với <strong>PTIT</strong> 
                    , nơi đào tạo các nhóm ngành CNTT hàng đầu VN.</p>
                
                <div className={headerCSS.social}>
                    <i className='ri-facebook-line'></i>
                    <i className='ri-instagram-line'></i>
                    <i className='ri-twitter-x-fill'></i>
                    <i className='ri-discord-line'></i>
                    <i className='ri-github-line'></i>
                </div>

                <button>Download now
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                </button>
            </div>
        </div>
        
    )
}

export default Header;