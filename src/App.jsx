import { useState } from 'react'
import './App.css'
import {Route, Routes} from "react-router-dom";
import Signup from "./pages/sign-up/signUp.jsx";

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Routes>
          <Route  path="/" element={<Signup />}/>
      </Routes>
    </>
  )
}

export default App
