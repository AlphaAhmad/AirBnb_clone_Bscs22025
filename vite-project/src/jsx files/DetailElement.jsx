import PropTypes from 'prop-types';
import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import axios from 'axios';

function Detail() {
    const { roomID } = useParams(); // get ID, being passed from the URL
    const [roomDetails, setRoomDetails] = useState([]);
    useEffect(() => {
        if (roomID) {
            console.log(`Room ID is ${roomID}`)
            axios.get(`http://localhost:3000/api/listing/${roomID}`)
                .then((Response) => {
                    console.log(Response.data)
                    setRoomDetails(Response.data)
                }).catch((error) => {
                    console.error("Error fetching data:", error);
                });
        }
        else {
            console.error("roomID is null");
        }
    },[roomID]) // only run when roomID changes

    if (!roomDetails) {
        return <div>No room details available.</div>;
    }

    return (
        <>
            <div className="ImgAndName">
                <div className="Thumbnail"><img src={roomDetails.imgSrc} alt="No Image found" /></div>
                <h1>{roomDetails.items?.[0]}</h1>   
            </div>
            <p>
                {roomDetails.detail}
            </p>
        </>
    );
};


// Define propTypes to validate the props   
Detail.propTypes = {
    MovieSrc: PropTypes.string.isRequired,
    MovieName: PropTypes.string.isRequired,
    Description: PropTypes.string.isRequired,
};

export default Detail;


