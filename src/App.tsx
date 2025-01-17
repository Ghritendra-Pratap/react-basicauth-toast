import { useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'
import LoginScreen from './Screens/LoginScreen'
import HomeScreen from './Screens/HomeScreen'
import { ToastContainer } from 'react-toastify'; 

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="*" element={<LoginScreen />} />
          <Route path="/home" element = {<HomeScreen/>}/>
        </Routes>
        <ToastContainer />
      </BrowserRouter>
    </>
  )
}

export default App
