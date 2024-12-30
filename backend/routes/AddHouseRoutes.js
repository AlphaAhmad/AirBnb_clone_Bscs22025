import express from "express"
// import User from "../models/userSchema.js";
import HouseData from "../models/HousesSchema.js"
import bcrypt from "bcryptjs"
import jwt from "jsonwebtoken"
import dotenv from "dotenv"
const HomeAddRouter = express.Router();
dotenv.config();

// To get all the listing s of rooms/houses in the database
HomeAddRouter.get("/getall", async (req, res) => {
    const allData = await HouseData.find({});
    if (!allData) {
        return res.status(400).send("No data found");
    }

    return res.status(200).json(allData);

}
)


HomeAddRouter.post("/save", async (req, res) => {
    try {
        const { Housename, Bedrooms, Rate, desc, category, imgSrc } = req.body;
        const House = new HouseData(
            {
                Housename,
                Bedrooms,
                Rate,
                desc,
                category,
                imgSrc
            }
        );

        await House.save();
        return res.status(201).json(House)

    }
    catch (error) {
        return res.status(500).send("Something went while saving house data in database")
    }
}
)

// HomeAddRouter.post("/getall", async (req, res) => {
//     try {
//         const returnedUser = null;
//         if (!returnedUser) {
//             return res.status(400).send("User Not found with provided username")
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

HomeAddRouter.get("/:id", async (req, res) => {
    try {
        // const _id = parseInt(req.params.id);// getting id in the request
        const _id = req.params.id; // `id` from request params is already a string
        //const card = card_data.find((c) => c.id === _id); // c is iterator
        const Required_Room = await HouseData.findById({_id})
        if (!Required_Room) {
            return res.status(404).json({ error: "Card not found" });
        }
        return res.json(Required_Room);
    }
    catch {
        // FOR MongoDB when i will add it...
        console.error("Error in fetching card data:", error);
        res.status(500).json({ error: "Internal Server Error" });
    }
}
)



export default HomeAddRouter;
