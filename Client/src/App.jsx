import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Layout from './Layout/Layout'
import SignUp from './Pages/SignUp'
import Login from './Pages/Login'
import HomePage from './Pages/HomePage'

function App() {
  return (
   <BrowserRouter>
   <Routes>
    <Route path ="/" element={<Layout />} >
     <Route index element={<HomePage />} />
       <Route path="/signup" element={<SignUp />} />
       <Route path="/login" element={<Login />} />

    </Route>
   </Routes>
   </BrowserRouter>
  )
}

export default App
