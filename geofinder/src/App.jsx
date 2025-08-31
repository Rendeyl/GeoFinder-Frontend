import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from './pages/login'
import './App.css'
import Home from './pages/home';

function App() {

  return (
    <>
      <Router>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/Home" element={<Home/>}/>
      </Routes> 
    </Router> 
    </>
  )
}

export default App
