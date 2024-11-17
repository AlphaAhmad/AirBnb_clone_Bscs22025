
function BookingForm()
{
    return(
        <form action="/Booking" method="post">
            <label htmlFor="name">Name</label>
            <input id="name" name="name" type="text" required />
            
            <label htmlFor="idCardNumber">ID Card Number</label>
            <input id="idCardNumber" name="idCardNumber" type="number" required />
            
            <label htmlFor="nightsToStay">Number of Nights to Stay</label>
            <input id="nightsToStay" name="nightsToStay" type="number" required />
            
            <button type="submit">Book Now</button>
        </form>
    )
}

export default BookingForm;
