import { useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import "../css files/booking form.css"
function BookingForm()
{
    const {roomID} = useParams();
    console.log(`Received RoomID: ${roomID}`)
    const [formData,setFormData] = useState(
        {
            name:"",
            idCardNumber:"",
            nightsToStay:0,
            roomID: roomID || "",
        }
    );

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            console.log("Submitting form data:", formData);
            const response = await axios.post(
                "http://localhost:3000/Booking/save",
                formData
            );

            if (response.status === 201) {
                alert("Booking successfully saved!");
            } else {
                alert("Failed to save booking. Please try again.");
            }
        } catch (error) {
            console.error("Error saving booking:", error);
            alert("An error occurred while saving your booking.");
        }
    };


    return(
        <form className="BookForm" onSubmit={handleSubmit}>
            <h1>Booking Form</h1>
            <label htmlFor="name">Name</label>
            <input
                id="name"
                name="name"
                type="text"
                placeholder="Albert Einstein"
                required
                value={formData.name}
                onChange={handleChange}
            />

            <label htmlFor="IDcard">ID Card Number</label>
            <input
                id="IDcard"
                name="IDcard"
                type="text"
                placeholder="35202-xxxxxxx-x"
                required
                value={formData.IDcard}
                onChange={handleChange}
            />

            <label htmlFor="nightsToStay">Number of Nights to Stay</label>
            <input
                id="nightsToStay"
                name="nightsToStay"
                type="number"
                placeholder="0"
                required
                value={formData.nightsToStay}
                onChange={handleChange}
            />


            <button className="SubButton" type="submit">Book Now</button>
        </form>
    )
}

export default BookingForm;
