import { useState } from 'react'
import './App.css'
import {Route, Routes} from "react-router-dom";
import Signup from "./pages/sign-up/signUp.jsx";
import Login from "./pages/login/login.jsx";
import Home from "./pages/home/home.jsx";

function App() {
  return (
    <>
      <Routes>
          <Route  path="/" element={<Home/>}/>
          <Route  path="/signup" element={<Signup />}/>
          <Route  path="/login" element={<Login/>}/>
      </Routes>
    </>
  )
}

export default App
