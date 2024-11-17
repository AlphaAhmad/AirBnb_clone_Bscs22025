import { useEffect, useState } from "react";
import { Link } from "react-router-dom"
import "../css files/card.css"
import PropTypes from 'prop-types';

function DisplayCard({ imageSrc, items }) {

    const [imgimageSrc, setImgimageSrc] = useState('');
    const [listItems, setListItems] = useState([]);
    useEffect(() => {
        // if source is not empty
        if (imageSrc) {
            setImgimageSrc(imageSrc);
        }
        if (items) {
            setListItems(items);
        }
    }, [imageSrc, items])

    return (
        <div className="card">
            <div className="display-img">
                <img src={imgimageSrc} alt="no img found" />
            </div>
            <div className="cardInfo">
                <ul>
                    {listItems.map((item, index) =>
                        <li key={index} className={index === 0 || index === 3 ? 'boldIt' : ''}>
                            {item}
                        </li>
                    )}
                </ul>
            </div>
            <Link to="/BookingPage"><button>BOOK IT</button></Link>
        </div>

    );

}

// Define propTypes to validate the props   
DisplayCard.propTypes = {
    imageSrc: PropTypes.string.isRequired,
    items: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default DisplayCard