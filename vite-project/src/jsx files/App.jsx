//import { useState } from 'react'
import Homepage from './homepage.jsx';
// import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import BookingPage from './BookingPage.jsx';
import ShowDetail from './DetailPage.jsx';
import LoginForm from './SignUp_page.jsx';
import SignUp from './SignUp_page.jsx';
import { Navigate } from 'react-router-dom';
import { useAuthStore } from '../store/useAuthStore.js';

function App() {

    const {user} = useAuthStore();

    return (
        <>
            <Router>
                <Routes>
                    <Route exact path='/BookingPage/:roomID' element={<BookingPage />}></Route>
                    <Route exact path='/' element={
                    // if user is present go to login else navigate to Login
                    user? <Homepage /> :<Navigate to="/login"/>
                    }></Route>
                    <Route exact path='/Detail/:roomID' element={<ShowDetail />}></Route>
                    <Route exact path='/Login' element={
                    user? <Navigate to="/"/>:<LoginForm />
                    }></Route>
                    <Route exact path='/Signup' element={<SignUp />}></Route>
                    {/* <Route exact path='/login' element={<Login />}></Route> */}
                </Routes>
            </Router>
        </>
    )
}

export default App


