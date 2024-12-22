//import { useState } from 'react'
//import reactLogo from './assets/react.svg'
//import viteLogo from '/vite.svg'
import Homepage from './homepage.jsx';
// import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import BookingPage from './BookingPage.jsx';
//import Navbar from './nav.jsx';
//import './index.css';

function App()
{
return (
    <>
        <Router>
            <Routes>
                <Route exact path='/BookingPage' element={<BookingPage />}></Route>
                <Route exact path='/' element={<Homepage/>}></Route>
                {/* <Route exact path='/login' element={<Login />}></Route> */}
            </Routes>
        </Router>
    </>
)
}

export default App


