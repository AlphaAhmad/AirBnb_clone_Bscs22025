import "../css files/footer.css"

function Footer() {
    return (
        <div className="footer">
            <ul className="social-icon">
                <li className="social-icon__item">
                    <a href="" className="social-icon_link">
                        <img src="src\assets\images\whatsapp (2).png" alt="WhatsApp Logo" className="whatsapp" />
                    </a>
                </li>
                <li className="social-icon__item">
                    <a href="#" className="social-icon_link">
                        <img src="src\assets\images\facebook2.png" alt="Facebook Logo" className="facebook" />
                    </a>    
                </li>
                <li className="social-icon__item">
                    <a href="" className="social-icon_link">
                        <img src="src\assets\images\instagram2.png" alt="Instagram Logo" className="insta" />
                    </a>
                </li>
            </ul>
            <ul className="contact-menu">
                <li className="menu-item"><a className="menu__link" href="#">Support</a></li>
                <li className="menu-item"><a className="menu__link" href="#">About</a></li>
                <li className="menu-item"><a className="menu__link" href="#">Hosting</a></li>
                {/* <li className="menu-item"><a className="menu__link" href="#">Team</a></li>
                <li className="menu-item"><a className="menu__link" href="#">Contact</a></li> */}
            </ul>
            <p>&copy; 2024 Muhammad Ahmad | All Rights Reserved</p>
        </div>
    );

}



export default Footer;