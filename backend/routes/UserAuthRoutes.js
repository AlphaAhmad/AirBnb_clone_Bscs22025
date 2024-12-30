import express from "express"
import User from "../models/userSchema.js";
import bcrypt from "bcryptjs"
import jwt from "jsonwebtoken"
import dotenv from  "dotenv"
const UserAuthRouter = express.Router();
dotenv.config();

UserAuthRouter.get("/", (req, res) => {
   res.send("ola boys")
}
)


UserAuthRouter.post("/signup", async (req, res) => {
    try {
        const { username, password } = req.body;
        const isAlreadyExists = await User.findOne({ username });
        if (isAlreadyExists) {
            return res.status(400).send("User Already Exists with entered Username")
        }
        const hashed_Password = await bcrypt.hash(password, 12);
        const user = new User(
            {
                username,
                password: hashed_Password,
            }
        );

        await user.save();
        return res.status(201).json(user)

    }
    catch (error) {
        return res.status(500).send("Something went wrong while signup")
    }
}
)

UserAuthRouter.post("/login", async (req, res) => {
    try{
        const {username,password} = req.body;
        // 1st check if the user exists or not
        const returnedUser = await User.findOne({username});
        
        if(!returnedUser)
        {
            return res.status(400).send("User Not found with provided username")
        }
        console.log(returnedUser)
        console.log(1)
        const isPasswordCorrect = await bcrypt.compare(password,returnedUser.password);
        console.log(2)
        console.log(isPasswordCorrect)
        if(!isPasswordCorrect)
        {
            return res.status(400).send("Invalid Password")
        }
    
        const token = jwt.sign({id:returnedUser._id}, process.env.JWT_SECRET,{expiresIn: "1h"})
        return res.status(200).json({returnedUser,token})
    }
    catch(error)
    {
        console.log(error)
        return res.status(400).send("something went wrong while logging in!")
    }
}
);

UserAuthRouter.get("/me",async (req,res)=>
{
    try{
        const token = req.headers.authorization.split(" ")[1];
        //  now decoding the received token from frontend
        const decoded = jwt.verify(token,process.env.JWT_SECRET); 
        console.log(decoded)
        const isExpired = Date.now() >= decoded.exp*1000;

        if(isExpired){
            return res.status(401).send("Token Expired")
        }

        const user = await User.findById(decoded.id);
        res.status(200).json({user});
    }
    catch(error)
    {
        console.log(error); 
        res.status(400).send("Something went wrong");
    };
});



export default UserAuthRouter;
