import { useRef } from "react";
import navCSS from './../Nav/Nav.module.css'

function Nav(){

    // Dark Light Mode
    const DarkMode = () => {
        document.querySelector('body').setAttribute('data-theme', 'Dark');
    }

    const LightMode = () => {
        document.querySelector('body').setAttribute('data-theme', 'Light');
    }

    const ThemeHandler = () => {
        if(document.querySelector('body').getAttribute('data-theme') === 'Dark') {
            LightMode();
        }
        else {
            DarkMode();
        }
    }

    const Menu = useRef();

    const menuHandler = () => {
        Menu.current.classList.toggle(navCSS.activeNav);
    }

    const Navbar = useRef();
    window.addEventListener('scroll', function() {
        if(window.scrollY > 150) {
            Navbar.current.classList.add(navCSS.navbarScroll);
        }
        else{
            Navbar.current.classList.remove(navCSS.navbarScroll);
        }
    })

    return (
        <div className={navCSS.Nav} ref={Navbar}>
            <div className={navCSS.logo}>
                <a href="#">PTIT</a>
            </div>

            <ul ref={Menu}>
                <li><a href="#home"> <i className='ri-home-3-line'/> Home</a></li>
                <li><a href="#about"> <i className='ri-user-line'/> About</a></li>
                <li><a href="#service"> <i className='ri-instance-line'/> Services</a></li>
                <li><a href="#portfolio"> <i className='ri-id-card-line'/> Portfolio</a></li>
                <li><a href="#testimonial"> <i className='ri-group-line'/> Testimonial</a></li>
                {/* <li><a href="#"> <i className='ri-news-line'/> Blogs</a></li> */}
                <li><a href="#contact"> <i className='ri-phone-line'/> Contact</a></li>
            </ul>

            <div className={navCSS.NavBtns}>
                <i className='ri-moon-line' onClick={ThemeHandler}></i>
                <i className='ri-menu-4-line' onClick={menuHandler}></i>
            </div>
        </div>
    )
}

export default Nav;