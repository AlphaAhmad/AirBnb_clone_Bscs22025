import mongoose from "mongoose";

// just a schema
const UserBookingSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: true,
        },
        IDcard: {
            type: String,
            required: true,
            unique: true, // Ensuring uniqueness for IDcard
        },
        nightsStay: {
            type: Number,
            required: true,
            min: 1, // Minimum stay of 1 night
        },
        roomID: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Room", // If you have a Room model
            required: true,
        },
    },
    {
        timestamps:true,
    }
);

// making a model named Item based on that schema
const Booking = mongoose.model("UserBooking",UserBookingSchema);
export default Booking;