import React from "react"
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from "./Home"
import Signup from "./Signup"
import Payment from "./Payment"
import Confirm from "./Confirm"

function App() {

  return (
   <Router>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/signup" element={<Signup/>}/>
      <Route path="/payment" element={<Payment/>}/>
      <Route path="/confirm" element={<Confirm/>}/>
    </Routes>
   </Router>
  )
}

export default App
