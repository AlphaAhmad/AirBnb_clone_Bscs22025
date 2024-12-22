import { useState } from "react";
import axios from "axios";
import "../css files/booking form.css"
function BookingForm()
{
    const [formData,setFormData] = useState(
        {
            name:"",
            idCardNumber:"",
            nightsToStay:""
        }
    )

    const handleChange = (e) => {
        const { name, value } = e.target; // Correct property names
        setFormData((prevData) => ({
            ...prevData,
            [name]: value, // Use the `name` to dynamically update the corresponding field
        }));
    };
    

    // form submission handeling (this should be done asynchronously)
    const handleSubmit = async (e)=>
    {
        e.preventDefault(); // prevent default data submission

        try{
            // data is being received here without any problem
            console.log(formData);
            const response = axios.post("http://localhost:3000/Booking",formData);
            if(response.status === 404)
            {
                alert("Failed to save booking");
            }
            else{
                alert("Booking successfully saved!");
            }
        }
        catch(error){
            console.error("Error",error);
            alert("An error occured while saving your booking credentials!");
        }
    }


    return(
        <form className="BookForm" onSubmit={handleSubmit}>
            <h1>Booking Form</h1>
            <label htmlFor="name">Name</label>
            <input id="name" name="name" type="text" required value={formData.name} onChange={handleChange} />

            <label htmlFor="idCardNumber">ID Card Number</label>
            <input id="idCardNumber" name="idCardNumber" type="text" required value={formData.idCardNumber} onChange={handleChange} />

            <label htmlFor="nightsToStay">Number of Nights to Stay</label>
            <input id="nightsToStay" name="nightsToStay" type="number" required value={formData.nightsToStay} onChange={handleChange} />

            <button className="SubButton" type="submit">Book Now</button>
        </form>
    )
}

export default BookingForm;
