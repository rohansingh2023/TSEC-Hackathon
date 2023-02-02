import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Question from './components/Ques/Question';
import Home from './components/Home';
import Navbar from './components/layout/Navbar';
import Login from './components/Sign/Login';
import Register from './components/Sign/Register';

const App = () => {
  return (
    <div>
      <Navbar></Navbar>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/interview" element={<Question />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} >
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App