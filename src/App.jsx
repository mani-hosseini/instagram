import { useState } from 'react'
import './App.css'
import {Route, Routes} from "react-router-dom";
import Signup from "./pages/sign-up/signUp.jsx";
import Login from "./pages/login/login.jsx";

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Routes>
          <Route  path="/" element={<Signup />}/>
          <Route  path="/login" element={<Login/>}/>
      </Routes>
    </>
  )
}

export default App
