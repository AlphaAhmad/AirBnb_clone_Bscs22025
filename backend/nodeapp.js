// const express = require("express");
// const path = require("path");
import express from "express"
import cors from "cors"
// import path from "path"
const app = express();
const PORT = 3000;

// hard coded local database
const card_data = [
    {
        id:1,
        imgSrc:'src/assets/images/mahelblashwar india.png',
        items:['Mahabaleshwar, India','Villa (Complete)','4 rooms with attached Sauna','$765 per night','4.5 star'],
    },
    {
        id:2,
        imgSrc:'src/assets/images/mahelblashwar india.png',
        items:['PC hotel, Pakistan','One Room','1 rooms with attached bath','$65 per night','4.3 star'],
    },
    {
        id:3,
        imgSrc:'src/assets/images/mahelblashwar india.png',
        items:['Naran Villa, Pakistan','Villa (Complete)','4 rooms with attached Sauna','$565 per night','4.5 star'],
    }
];

const bookings = [] // database for saving Booking form submissions

//+++++++++++++++++++++ Middle wares +++++++++++++++

// Middleware to parse incoming JSON
app.use(express.json());

// Server static files (if you have images, CSS, etc.)
// app.use(express.static(path.join(__dirname, "public")));

// dedicated 

const ValidateBookingData = (req,res,next)=>
{
    const _name = req.body.name;
    const _idCardNumber  = req.body.idCardNumber;
    const _nightsToStay = req.body.nightsToStay;

    if(!_name||!_idCardNumber ||!_nightsToStay)
    {
        return res.status(400).json({error:"input data is empty"});
    }
    else if(_nightsToStay===0)
    {
        return res.status(400).json({error:"Number of Nights cant be zero"});
    }
    else
    {
        console.log("No problem in form input data")
        next();
    }
    
};


// TODO: Join with MongoDB 


// Define Routes
app.get("/", (req, res) => {
    res.send("Welcome to Your Project!");
});


//+++++++++++++++++++++++++++++++++++++++++++++++++++
//Current code is working on local database (cards array) right now 
//+++++++++++++++++++++++++++++++++++++++++++++++++++

// Allowing React to excess cross platform data
app.use(cors({
    origin: "http://localhost:5173",
}));


// Route to get all cards
app.get("/api/listing", (req,res)=>
    {   
        try{
            res.json(card_data);   
        }
        catch{
            // this is for MongoDB.. when it will be added 
            return res.status(500).json({error:"Failed to fetch data"});
        }
    }
);

app.get("/booking/listing", (req,res)=>
    {   
        try{
            res.json(bookings);   
        }
        catch{
            // this is for MongoDB.. when it will be added 
            return res.status(500).json({error:"Failed to fetch data"});
        }
    }
);


// route for page where user has reached after selecting a room in homepage
// Route to get a single item by ID
app.get("/api/listing/:id",(req,res)=>
    {   
        try{
            const _id = parseInt(req.params.id);// getting id in the request
            const card = card_data.find((c)=>c.id === _id); // c is iterator
            if(!card)
            {
                return res.status(404).json({error:"Card not found"});
            }
            return res.json(card);
        }   
        catch{
            // FOR MongoDB when i will add it...
        }
    }
)


// post request to save booking data
app.post("/Booking",ValidateBookingData,(req,res)=>
    {
        console.log("Reaching here");

        const  {name,idCardNumber,nightsToStay} = req.body;

        const BookingData  = {name,idCardNumber,nightsToStay};

        bookings.push(BookingData);

        res.status(201).json({message:"Booking successfully added!",BookingData})
    }
)

// Start the server
app.listen(PORT, () => {    
    console.log(`Server is running on http://localhost:${PORT}`);
});
