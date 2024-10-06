import "../css files/nav.css"
import { useState } from "react";

// TODO: make the toggle function of login image cancel when click on anywhere other then the image

function Navbar() {

    const [isOpen, set_isOpen] = useState(false);

    // Toggle Dropdown visibility
    const toggleDropDown = () => {
        set_isOpen(!isOpen)
    }

    return (
        <nav className="Nav">
            <img
                className="logo" // Set logo size with responsive adjustments
                src="src/assets/images/airbnb-2-logo-png-transparent.png"
                alt="Airbnb Logo"
            />
            <ul className="nav_options">
                <li>Stays</li>
                <li>Experiences</li>
            </ul>
            <div className="dropdown">
                <img className="loginImg"
                    src="src\assets\images\login icon.png"
                    alt="Login img not found"
                    onClick={toggleDropDown} />
                {/* here isOpen is checker wheather its true or false, if true then class show is added in the div else nothing is added and show class has css property of display:block */}
                <div className={`dropdown-content ${isOpen ? 'show' : ''}`}>
                    <p style={{ fontWeight: "bold" }}>Sign Up</p>
                    <p onClick={{}}>Login</p>
                </div>
            </div>

        </nav>


    )
};

export default Navbar; // exporting this function for usability