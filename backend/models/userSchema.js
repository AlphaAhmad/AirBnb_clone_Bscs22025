import mongoose from "mongoose";

// just a schema
const UserSchema = new mongoose.Schema(
    {
        username: {
            type: String,
            required:true,
            unique:true,
        },
        password: {
            type:String,
            required:true,
        },
        isAdmin:{
            type:Boolean,
            required:true,
            default: false, // user will be set non admin by default
        }
    },
    {
        timestamps:true,
    }
);

// making a model named Item based on that schema
const User = mongoose.model("User",UserSchema);
export default User;