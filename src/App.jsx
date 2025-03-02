import { useState } from 'react'
import './App.css'
import {Route, Routes} from "react-router-dom";
import Signup from "./pages/sign-up/signUp.jsx";
import Login from "./pages/login/login.jsx";
import Nav from './pages/nav/nav.jsx';
import Layout from './pages/nav/nav.jsx';

function App() {
  

  return (
    <>
      <Routes>
      <Route path="/" element={<Layout/>}></Route>
      </Routes>
    </>
  )
}

export default App



