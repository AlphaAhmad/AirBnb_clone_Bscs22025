import { useEffect, useState } from "react";
import { Link } from "react-router-dom"
import "../css files/card.css"
import PropTypes from 'prop-types';

function DisplayCard({ _Id ,imageSrc, items }) {

    const [imgimageSrc, setImgimageSrc] = useState(''); // image URL of the Room
    const [listItems, setListItems] = useState([]); // info about the room
    const [RoomID,setRoomID]=useState(''); // Rooms entry ID in our database
    useEffect(() => {
        // if source is not empty
        if (imageSrc) {
            setImgimageSrc(imageSrc);
        }// if details are not empty
        else{
            console.error("imageSrc received corrupted in card");
        }
        if (items) {
            setListItems(items);
        }
        else{
            console.error("items received corrupted in card");
        }
        // if room ID is not empty
        if(_Id){
            setRoomID(_Id);
        }
        else{
            console.error("_Id received corrupted in card");
        }
        
    }, [imageSrc, items, _Id]);

    return (
        <Link to={`/Detail/${RoomID}`}>
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
                <Link to={`/BookingPage/${RoomID}`}><button className="BookBtn">BOOK IT</button></Link>
            </div>
        </Link>

    );

}

// Define propTypes to validate the props   
DisplayCard.propTypes = {
    imageSrc: PropTypes.string.isRequired,
    items: PropTypes.arrayOf(PropTypes.string).isRequired,
    _Id: PropTypes.string.isRequired,
};

export default DisplayCard