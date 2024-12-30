import { useState, } from "react";
import { useNavigate } from "react-router-dom";
import "../css files/login.css"   
import axios from "axios"
import toast from "react-hot-toast"
import { useAuthStore } from "../store/useAuthStore";

function LoginForm() {  

    const[loading,setLoading] = useState(false);
    const nave = useNavigate();
    const [formData,setFormData] = useState(
        {
            username:"",
            password:"",
        }
    )
    const {setUser} = useAuthStore();


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
                setLoading(true)
                //data is being received here without any problem
                console.log(formData);
                const response = await axios.post("http://localhost:3000/user/auth/login",formData);
                if(response.status === 400)
                {
                    toast.error("Error 400: Your credentials are not right")
                    // nave("/login");
                }
                else{
                    toast.success("Login credentials found")
                    setUser(response.data.returnedUser);
                    localStorage.setItem("token",response.data.token)
                    // nave("/");
                }
            }
            catch(error){
                console.error("Error",error);
                toast.error("ERROR 400: Your credentials are not right!!!");
            }finally{
                setLoading(false);
            }
        }

        const navToSignup = ()=>{
            nave("/signup")
        }
  
    return (
        <>
            <form className="BookForm" onSubmit={handleSubmit}>
                <h1>Login</h1>
                <label htmlFor="name">Name</label>
                <input id="name" name="username" type="text" required value={formData.username} onChange={changeCreadentials} />

                <label htmlFor="password">Password</label>
                <input id="password" name="password" type="password" required value={formData.password} onChange={changeCreadentials} />

                <button className="SubButton" disabled={loading} type="submit">{loading? "Loading...":"Log In"}</button>
                <button className="SubButton" type ="reset" onClick={navToSignup}>SignUp Page</button>
            </form>
        </>
    )   
}


export default LoginForm;