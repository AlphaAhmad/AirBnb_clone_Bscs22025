import { useEffect, useState } from "react";
import "../css files/card.css"
import PropTypes from 'prop-types';

function DisplayCard({ imageSrc,items}) {

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
    }, [imageSrc,items])

    return (
        <div className="card">
            <div className="display-img">
                <img src={imgimageSrc} alt="no img found"/>
            </div>
            <div className="cardInfo">
                <ul>
                    {listItems.map((item,index)=>
                        <li key={index}>{item}</li>
                    )}
                    
                </ul>
            </div>

        </div>

    );

}

// Define propTypes to validate the props
DisplayCard.propTypes = {
    imageSrc: PropTypes.string.isRequired,
    items: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default DisplayCard