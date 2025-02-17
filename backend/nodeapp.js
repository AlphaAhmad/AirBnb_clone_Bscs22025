// const express = require("express");
// const path = require("path");
import EventEmitter from "events"
EventEmitter.defaultMaxListeners = 20; // Increase limit
import express from "express"
import cors from "cors"
import mongoose from "mongoose";
import dotenv from "dotenv";
import UserAuthRouter from "./routes/UserAuthRoutes.js";
import HomeAddRouter from "./routes/AddHouseRoutes.js";
import BookingRouter from "./routes/BookFormRoutes.js";
const app = express();
const PORT = 3000;

// Allowing React to excess cross platform data
app.use(cors({
    origin: "http://localhost:5173",
}));
dotenv.config();


//+++++++++++++++++++++ Middle wares +++++++++++++++

// Middleware to parse incoming JSON

app.use(express.json());

// joining the MongoDB
const URI = process.env.MONGO_URI;

// Middleware for parsing JSON requests
app.use(express.json());

// connecting the database
console.log(URI)
mongoose.connect(URI);

mongoose.connection.once("open", () => {
    console.log("Connected To Database");
}
)

mongoose.connection.on("error", (err) => {
    console.log("Error: ", err);
}
)

// dedicated 

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


// TODO: Join with MongoDB 


// Define Routes
app.get("/", (req, res) => {
    res.send("Welcome to Your Project!");
});

// Redirecting Routes
app.use("/user/auth",UserAuthRouter);
app.use("/addhouse",HomeAddRouter);
app.use("/Booking",BookingRouter);
//+++++++++++++++++++++++++++++++++++++++++++++++++++
//Current code is working on local database (cards array) right now 
//+++++++++++++++++++++++++++++++++++++++++++++++++++



// Route to get all cards
// app.get("/api/listing", (req, res) => {
//     try {
//         res.json(card_data);
//     }
//     catch {
//         // this is for MongoDB.. when it will be added 
//         return res.status(500).json({ error: "Failed to fetch data" });
//     }
// }
// );

// app.get("/booking/listing", (req, res) => {
//     try {
//         res.json(bookings);
//     }
//     catch {
//         // this is for MongoDB.. when it will be added 
//         return res.status(500).json({ error: "Failed to fetch data" });
//     }
// }
// );


// route for page where user has reached after selecting a room in homepage
// Route to get a single item by ID
// app.get("/api/listing/:id", (req, res) => {
//     try {
//         // const _id = parseInt(req.params.id);// getting id in the request
//         const _id = req.params.id; // `id` from request params is already a string
//         //const card = card_data.find((c) => c.id === _id); // c is iterator
//         const Required_Room = HouseData.findById({_id})
//         if (!card) {
//             return res.status(404).json({ error: "Card not found" });
//         }
//         return res.json(card);
//     }
//     catch {
//         // FOR MongoDB when i will add it...
//         console.error("Error in fetching card data:", error);
//         res.status(500).json({ error: "Internal Server Error" });
//     }
// }
// )


// post request to save booking data
// app.post("/Booking", ValidateBookingData, (req, res) => {
//     console.log("Reaching here");

//     const { name, idCardNumber, nightsToStay } = req.body;

//     const BookingData = { name, idCardNumber, nightsToStay };

//     bookings.push(BookingData);

//     res.status(201).json({ message: "Booking successfully added!", BookingData })
// }
// )

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});




