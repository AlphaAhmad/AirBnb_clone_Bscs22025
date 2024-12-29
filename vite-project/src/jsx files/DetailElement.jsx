import PropTypes from 'prop-types';
import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import axios from 'axios';

function Detail() {
    const { roomID } = useParams(); 
    const [roomDetails, setRoomDetails] = useState(null); // Use `null` as the initial state

    useEffect(() => {
        if (roomID) {
            console.log(`Room ID is ${roomID}`);
            axios.get(`http://localhost:3000/api/listing/${roomID}`)
                .then((response) => {
                    console.log("API Response:", response.data);
                    setRoomDetails(response.data);
                })
                .catch((error) => {
                    console.error("Error fetching data:", error);
                });
        } else {
            console.error("roomID is null");
        }
    }, [roomID]);

    if (!roomDetails) {
        return <div>Loading room details...</div>;
    }

    return (
        <>
            <div className="ImgAndName">
                <div className="Thumbnail">
                    <img
                        // src={roomDetails.imgSrc || "/placeholder-image.jpg"}
                        // alt={roomDetails.items?.[0] || "Room thumbnail"}
                        src={roomDetails.imgSrc}
                    />
                </div>
                <h1>{roomDetails.Housename}</h1>
            </div>
            <p>{roomDetails.desc}</p>
        </>
    );
}


// Define propTypes to validate the props   
Detail.propTypes = {
    MovieSrc: PropTypes.string.isRequired,
    MovieName: PropTypes.string.isRequired,
    Description: PropTypes.string.isRequired,
};

export default Detail;


