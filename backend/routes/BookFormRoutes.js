import express from "express"
import Booking from "../models/BookFormSchema.js"
import bcrypt from "bcryptjs"
import jwt from "jsonwebtoken"
import dotenv from "dotenv"
const BookingRouter = express.Router();
dotenv.config();

BookingRouter.get("/",(req,res)=>
{
    res.send("I am here")
});

// To get all the bookings in the DB (for Admin)
BookingRouter.get("/getall", async (req, res) => {
    const allData = await Booking.find({});
    
        if (!allData) {
        return res.status(400).send("No data found");
    }

    return res.status(200).json(allData);
});

// To get bookings related to a specific user (non admin user)
BookingRouter.get("/:username", async (req, res) => {
    try {
        const username = req.params.username; // get the username from the URL parameter
        console.log(username)
        const Required_Booking = await Booking.find({ name: username }); // find bookings by the 'name' 
        
        if (!Required_Booking || Required_Booking.length === 0) {
            return res.status(404).json({ error: "Bookings not found for this username" });
        }

        return res.status(200).json(Required_Booking); 
    } catch (error) {
        console.log(error);
        return res.status(400).send("Something went wrong while fetching the data");
    }
});




// middle ware for save router
// const ValidateBookingData = (req, res, next) => {
//     const _name = req.body.name;
//     const _idCardNumber = req.body.idCardNumber;
//     const _nightsToStay = req.body.nightsToStay;

//     if (!_name || !_idCardNumber || !_nightsToStay) {
//         return res.status(400).json({ error: "input data is empty" });
//     }
//     else if (_nightsToStay === 0) {
//         return res.status(400).json({ error: "Number of Nights cant be zero" });
//     }
//     else {
//         console.log("No problem in form input data")
//         next();
//     }

// };


// To save a booking
BookingRouter.post("/save",async (req, res) => {
    try {
        const { name, IDcard, nightsToStay, roomID } = req.body;

        // Validate required fields
        if (!name || !IDcard || !nightsToStay || !roomID) {
            return res.status(400).json({ error: "All fields are required." });
        }
        else if (_nightsToStay === 0) {
            return res.status(400).json({ error: "Number of Nights cant be zero" });
        }
        else {
            console.log("No problem in form input data")
            next();
        }

        // Create and save the booking request
        const BookingRequest = new Booking({
            name,
            IDcard,
            nightsStay: nightsToStay,
            roomID,
        });

        await BookingRequest.save();
        return res.status(201).json(BookingRequest);
    } catch (error) {
        console.error("Error saving booking:", error);
        return res.status(500).json({
            error: "Something went wrong while saving the booking request.",
        });
    }
});





export default BookingRouter;




































// BookingRouter.post("/getall", async (req, res) =>{
//     try {
//         const returnedUser = null;
//         if (!returnedUser) {
//             return res.status(400).send("User Not founf with provided username")
//         }
//         const isPasswordCorrect = await bcrypt.compare(password, returnedUser.password);
//         if (!isPasswordCorrect) {
//             return res.status(400).send("Invalid Password")
//         }

//         const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, { expiresIn: "1h" })
//         return res.status(200).json(returnedUser)
//     }
//     catch (error) {
//         return res.status(400).send("something went wrong while logging in!")
//     }
// }
// )

// HomeAddRouter.get("/:id", async (req, res) => {
//     try {
//         // const _id = parseInt(req.params.id);// getting id in the request
//         const _id = req.params.id; // `id` from request params is already a string
//         //const card = card_data.find((c) => c.id === _id); // c is iterator
//         const Required_Room = await HouseData.findById({_id})
//         if (!Required_Room) {
//             return res.status(404).json({ error: "Card not found" });
//         }
//         return res.json(Required_Room);
//     }
//     catch {
//         // FOR MongoDB when i will add it...
//         console.error("Error in fetching card data:", error);
//         res.status(500).json({ error: "Internal Server Error" });
//     }
// }
// )
