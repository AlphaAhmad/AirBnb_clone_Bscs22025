import "../css files/nav.css"
import { useState } from "react";
import { Link } from "react-router-dom"
import { useAuthStore } from "../store/useAuthStore";
import { useNavigate } from "react-router-dom";
// TODO: make the toggle function of login image cancel when click on anywhere other then the image
function Navbar() { 

    const [isOpen, set_isOpen] = useState(false);
    const {user,setUser} = useAuthStore();
    const nave = useNavigate();

    // Toggle Dropdown visibility
    const toggleDropDown = () => {
        set_isOpen(!isOpen)
    }
    
    const LogOut = ()=>
    {
        setUser(null);
        localStorage.removeItem("token");
        nave("/login");
    }

    return (
        <nav className="Nav">
            <img
                className="logo" // Set logo size with responsive adjustments
                src="/public/airbnb-2-logo-png-transparent.png"
                alt="Airbnb Logo"
            />
            <div className="inMobilePrll">
                <ul className="nav_options">
                    <li><Link to="/">HOME</Link></li>
                    <li><Link to={`/Bookinglist/${user._id}`}>Booking List</Link></li>
                    <li><Link to={"/admin"}>Admin Panel</Link></li>
                </ul>
                <div className="dropdown">
                    <img className="loginImg"
                        src="/public/login icon.png"
                        alt="Login img not found"
                        onClick={toggleDropDown} />
                    {/* here isOpen is checker wheather its true or false, if true then class show is added in the div else nothing is added and show class has css property of display:block */}
                    <div className={`dropdown-content ${isOpen ? 'show' : ''}`}>
                        
                        <p style={{ fontWeight: "bold"}}>{user.username}</p>
                        {/* <p style={{ fontWeight: "bold" , borderWidth:"1px", borderRadius:"3px" }}>Sign Up</p> */}
                        <p className="x" style={{ borderWidth:"1px", borderRadius:"3px"}}><button onClick={LogOut}>Log Out</button></p>
                    </div>
                </div>
            </div>
        </nav>


    )
};

export default Navbar; // exporting this function for usability