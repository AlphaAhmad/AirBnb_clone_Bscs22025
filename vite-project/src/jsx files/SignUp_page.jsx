import { useState, } from "react";
// import { useNavigate } from "react-router-dom";
import { useNavigate } from "react-router-dom";
// import { Navigate } from "react-router-dom";
import "../css files/login.css"
import axios from "axios"

function SignUp() {  

    
    const nave = useNavigate();
    const [formData,setFormData] = useState(
        {
            username:"",
            password:"",
        }
    )

    const changeCreadentials = (e)=>
    {
        const {name,value} =  e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value, // Use the `name` to dynamically update the corresponding field
        }));

    }

    

    const handleSubmit = async (e)=>
        {
            e.preventDefault(); // prevent default data submission
    
            try{
                //data is being received here without any problem
                console.log(formData);
                const response = await axios.post("http://localhost:3000/user/auth/signup",formData);
                if(response.status === 400)
                {
                    alert("Error 400: Your credentials are not right")
                    nave("/login");
                }
                else{
                    alert("Login credentials found")
                    nave("/");
                }
            }
            catch(error){
                console.error("Error",error);
                alert("An error occured while checking your credentials!");
            }
        }

  
    return (
        <>
            <form className="BookForm" onSubmit={handleSubmit}>
                <h1>SignUp</h1>
                <label htmlFor="name">Name</label>
                <input id="name" name="username" type="text" required value={formData.username} onChange={changeCreadentials} />

                <label htmlFor="password">Password</label>
                <input id="password" name="password" type="password" required value={formData.password} onChange={changeCreadentials} />

                <button className="SubButton" type="submit">SignUp</button>
                {/* <button className="SubButton" type ="button" onClick={<Navigate to="/login"/>}>Login Page</button> */}
            </form>
        </>
    )   
}


export default SignUp;