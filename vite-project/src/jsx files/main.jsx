import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx';
import '../index.css'
import { Toaster } from 'react-hot-toast';
// Html ma ak element tha usa utahaya or usa render karwa dia 
const ele1 = document.getElementById('root')

// rendering id=root element and now this render is like our main function
createRoot(ele1).render(
  <StrictMode>
    <Toaster/>
    <App />
  </StrictMode>,
)


