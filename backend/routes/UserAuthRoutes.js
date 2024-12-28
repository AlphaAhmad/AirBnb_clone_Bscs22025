import express from "express"
import User from "../models/userSchema.js";
const UserAuthRouter = express.Router();

UserAuthRouter.get("/", (req, res) => {

}
)

UserAuthRouter.post("/signup", (req, res) => {
    try {
        const { username, password } = req.body;
        const isAlreadyExists = User.findOne({ username });
        if (isAlreadyExists) {
            return res.status(400).send("User Already Exists with entered Username")
        }


    }
    catch (error) {

    }
}
)

UserAuthRouter.post("/login", (req, res) => {

}
)



export default UserAuthRouter;
