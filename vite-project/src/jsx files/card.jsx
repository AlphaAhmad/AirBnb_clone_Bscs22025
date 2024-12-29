// import { useEffect, useState } from "react";
import { Link } from "react-router-dom"
import "../css files/card.css"
import PropTypes from 'prop-types';

// function DisplayCard({ _Id ,imageSrc, housename,Bedrooms,Rate }) {

//     const [_imgSrc, setImgimageSrc] = useState(''); // image URL of the Room
//     const [Housename, setHousename] = useState(''); // info about the room
//     const [no_Beds, setBedRooms] = useState(0); // info about the room
//     const [_Rate, setRate] = useState(0); // info about the room
//     const [RoomID,setRoomID]=useState(''); // Rooms entry ID in our database
//     useEffect(() => {
//         // if source is not empty
//         if (_imgSrc) {
//             setImgimageSrc(imageSrc);
//         }// if details are not empty
//         else{
//             console.error("imageSrc received corrupted in card");
//         }
//         if (Housename) {
//             setHousename(housename);
//         }
//         else{
//             console.error("Housename received corrupted in card");
//         }
//         if (no_Beds) {
//             setBedRooms(Bedrooms);
//         }
//         else{
//             console.error("no_Beds received corrupted in card");
//         }
//         if (_Rate) {
//             setRate(Rate);
//         }
//         else{
//             console.error("_Rate received corrupted in card");
//         }
//         // if room ID is not empty
//         if(_Id){
//             setRoomID(_Id);
//         }
//         else{
//             console.error("_Id received corrupted in card");
//         }
        
//     }, [imageSrc,housename, _Id,Bedrooms,Rate]);

//     return (
//         <Link to={`/Detail/${RoomID}`}>
//             <div className="card">
//                 <div className="display-img">
//                     <img src={_imgSrc} alt="no img found" />
//                 </div>
//                 <div className="cardInfo">
//                     <ul>
//                         <li>{Housename}</li>
//                         <li>{no_Beds}</li>
//                         <li>{_Rate}</li>
//                     </ul>
//                 </div>
//                 <Link to={`/BookingPage/${RoomID}`}><button className="BookBtn">BOOK IT</button></Link>
//             </div>
//         </Link>

//     );

// }

function DisplayCard({ _Id, imageSrc, housename, Bedrooms, Rate }) {
    return (
        <Link to={`/Detail/${_Id}`}>
            <div className="card">
                <div className="display-img">
                    <img src={imageSrc} alt="no img found" />
                </div>
                <div className="cardInfo">
                    <ul>
                        <b><li>{housename}</li></b>
                        <li>{Bedrooms}</li>
                        <li>{Rate}</li>
                    </ul>
                </div>
                <Link to={`/BookingPage/${_Id}`}>
                    <button className="BookBtn">BOOK IT</button>
                </Link>
            </div>
        </Link>
    );
}
// Define propTypes to validate the props   
DisplayCard.propTypes = {
    imageSrc: PropTypes.string.isRequired,
    housename: PropTypes.string.isRequired,
    Bedrooms: PropTypes.number.isRequired,
    Rate: PropTypes.number.isRequired,
    _Id: PropTypes.string.isRequired,
};

export default DisplayCard