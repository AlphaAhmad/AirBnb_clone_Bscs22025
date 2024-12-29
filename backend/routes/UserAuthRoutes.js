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
        const returnedUser = User.findOne({username});
        if(!returnedUser)
        {
            return res.status(400).send("User Not founf with provided username")
        }
        const isPasswordCorrect = await bcrypt.compare(password,returnedUser.password);
        if(!isPasswordCorrect)
        {
            return res.status(400).send("Invalid Password")
        }

        const token = jwt.sign({id:user._id}, process.env.JWT_SECRET,{expiresIn: "1h"})
        return res.status(200).json(returnedUser)
    }
    catch(error)
    {
        return res.status(400).send("something went wrong while logging in!")
    }
}
)



export default UserAuthRouter;
