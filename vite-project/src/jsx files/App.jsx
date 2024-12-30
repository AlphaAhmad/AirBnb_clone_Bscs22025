//import { useState } from 'react'
import Homepage from './homepage.jsx';
// import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import BookingPage from './BookingPage.jsx';
import ShowDetail from './DetailPage.jsx';
import LoginForm from './loginPage.jsx';
import SignUp from './SignUp_page.jsx';
import { Navigate } from 'react-router-dom';
import { useAuthStore } from '../store/useAuthStore.js';
import axios from 'axios';  
import { useEffect } from 'react';
import BookingList from './BookingList.jsx';
import AdminPanel from './Adminpanel.jsx';

function App() {

    const { user , setUser} = useAuthStore();

    useEffect(()=>
    {
        handleLoginBack();
    }
    ,[])

    const handleLoginBack = async ()=>
    {
        try{
            const token = localStorage.getItem("token");
            if (!token) return;
            console.log(token)
            const res = await axios.get("http://localhost:3000/user/auth/me",
                {
                    headers:{
                        Authorization: `Bearer ${token}`,
                    }
                }
            )
            setUser(res.data.user);
        }
        catch(error){
            console.log(error);
        }
    }


    return (
        <>
            <Router>
                <Routes>
                    <Route exact path='/BookingPage/:roomID' element={<BookingPage />}></Route>

                    <Route exact path="/Bookinglist/:userID" element={<BookingList/>}></Route>

                    <Route exact path='/' element={
                        // if user is present go to login else navigate to Login
                        user ? <Homepage /> : <Navigate to="/login" />
                    }></Route>
                    
                    <Route exact path='/Detail/:roomID' element={<ShowDetail />}></Route>

                    <Route exact path='/Login' element={
                        user ? <Navigate to="/" /> : <LoginForm />
                    }></Route>

                    <Route exact path='/Signup' element={<SignUp />}></Route>

                    <Route 
                    exact 
                    path='/admin' 
                    element={
                        user && user.isAdmin === true ? <AdminPanel /> : <Navigate to="/" />
                    }
                />
                  

                </Routes>
            </Router>
        </>
    )
}

export default App


