import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Layout from './Layout/Layout'
import SignUp from './Pages/SignUp'
import Login from './Pages/Login'
import HomePage from './Pages/HomePage'
import Tractor from './Pages/Tractor'
import TractorsPage from './Pages/TractorsPage'
import AddTractor from './Sellers/AddTractor'
import AdminLayout from './Layout/AdminLayout'


function App() {
  return (
   <BrowserRouter>
   <Routes>
      {/*  */}
   <Route path ="/admin" element={<AdminLayout/>} >
   </Route>

   {/* normal layout */}
    <Route path ="/" element={<Layout />} >
     <Route index element={<HomePage />} />
       <Route path="/signup" element={<SignUp />} />
       <Route path="/login" element={<Login />} />
       <Route path="/tractor" element={<Tractor />} />
       <Route path="/tractors" element={<Tractor />} />
       <Route path="/tractors/:type" element={<TractorsPage />} />
        <Route path="/add tractor" element={<AddTractor />} />
          
    </Route>
   </Routes>
   </BrowserRouter>
  )
}

export default App
