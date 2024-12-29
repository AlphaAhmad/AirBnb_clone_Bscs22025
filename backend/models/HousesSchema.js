import mongoose from "mongoose";

// just a schema
const RentHouse = new mongoose.Schema(
    {
        Housename: {
            type: String,
            required:true,
            unique:true,
        },
        Bedrooms: {
            type: Number,
            required:true,
        },
        Rate: {
            type:Number,
            required:true,
        },
        // description
        desc:{
            type:String,
            required:true
        },
        category:{
            type:String,
            required:true
        },
        imgSrc:{
            type:String,
            required:true

        }
    }
);

// making a model named Item based on that schema
const HouseData = mongoose.model("RentHouse",RentHouse);
export default HouseData;