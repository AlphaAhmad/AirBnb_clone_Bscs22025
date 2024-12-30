import { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
// import "../css files/BookingList.css"

function BookingList()
{
    const { userID } = useParams(); // Extract userID from the URL
    // console.log(`userID is: ${userID}`)
    const [data, setData] = useState([]); // State to store data fetched from the API

    const fetchData = async () => {
        try {
            // Get user details by userId
            console.log(userID)
            const userResponse = await axios.get(`http://localhost:3000/user/auth/${userID}`);
            const user = userResponse.data;
            console.log(`user is: ${user.username}`) 
            if (user.isAdmin) {
                // If the user is admin, fetch all users' listings
                const dataResponse = await axios.get("http://localhost:3000/Booking/getall");
                setData(dataResponse.data);
            } else {
                // If the user is not admin, fetch only their specific bookings
                console.log(user.IDcard)
                const dataResponse = await axios.get(`http://localhost:3000/Booking/${user.username}`);
                setData(dataResponse.data);
            }
        } catch (err) {
            console.error(err);
            alert("Failed to fetch data in the listings section API.");
        }
    };

    useEffect(() => {
        // Fetch data whenever the userID changes
        fetchData();
    }, [userID]);

    return (
        <div>
            <h1>Listings</h1>
            <ul>
                {data.map((item) => (
                    <li key={item._id}>
                        <p>{item.name}</p>
                        <p>{item.IDcard}</p>
                        <p>{item.nightsStay}</p>
                        <p>{item.roomID}</p>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default BookingList;

// const {userID} = useParams();
    // const [data,setData] = useState([])

    // const fetchData = async () => {
    //     try {
    //         // Get user details by userId
    //         const userResponse = await axios.get(`http://localhost:3000/user/auth/${userID}`);
    //         const user = userResponse.data;

    //         if (user.isAdmin) {
    //             // If ther user is admin, fetch all users listings even includiing ourselves
    //             const dataResponse = await axios.get("http://localhost:3000/getall");
    //             setData(dataResponse.data);
    //         } else {
    //             // If the user is not admin, fetch only current 
    //             const dataResponse = await axios.get(`http://localhost:3000/Booking/${userID}`);
    //             setData(dataResponse.data);
    //         }
    //     } catch (err) {
    //         console.error(err);
    //         alert("Failed to fetch data. In listing section API.");
    //     }
    // };

    // useEffect(() => {
    //     // Function to fetch user's data
    //     fetchData();
    // }, [userID]);

    // return(
    //     <div>
    //         <h1>Listings</h1>
    //         <ul>
    //             {data.map((item) => (
    //                 <li key={item._id}>
    //                     <p>{item.name}</p>
    //                     <p>{item.IDcard}</p>
    //                     <p>{item.nightsStay}</p>
    //                     <p>{item.roomID}</p>
    //                 </li>
    //             ))}
    //         </ul>
    //     </div>