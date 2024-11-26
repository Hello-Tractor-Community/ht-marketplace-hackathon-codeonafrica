import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './Layout/Layout';
import SignUp from './Pages/SignUp';
import Login from './Pages/Login';
import HomePage from './Pages/HomePage';
import Tractor from './Pages/Tractor';
import TractorsPage from './Pages/TractorsPage';
import AdminLayout from './Layout/AdminLayout';
import BuyerProfile from './Pages/BuyerProfile';
import SellerProfile from './Pages/SellerProfile';
import TractorDealershipPage from './Pages/DealershipProfile';
import AdminPage from './Pages/AdminPage';
import ProtectedRoute from './Auth/ProtectedRoute';
import NotFound from './Components/NotFound';
import AddTractor from './Sellers/AddTractor'
import Dealerships from './Components/HomeComponents/Dealerships';
import AddDealership from './Admin/AddDealership';
import AddEquipment from './Admin/AddEquipment';
import AddBrand from './Admin/AddBrand';



function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Admin routes */}
        <Route element={<ProtectedRoute />}>
          <Route path="/admin" element={<AdminLayout />}>
          <Route path ="add-tractor" element={<AddTractor />}  />
          <Route path="add-dealership" element={<AddDealership />} />
          <Route path="add-equipment" element={<AddEquipment />} />
          <Route path ="add-brand" element={ <AddBrand />} />
            <Route index element={<AdminPage />} />

          </Route>
        </Route>

        {/* Public routes */}
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="signup" element={<SignUp />} />
          <Route path="login" element={<Login />} />
          <Route path="tractor" element={<Tractor />} />
          <Route path="tractors" element={<TractorsPage />} />
          <Route path="/tractors/:type" element={<TractorsPage />} />
          <Route path="/add-tractor" element={<AddTractor />} />
          <Route element={<ProtectedRoute />}>
          <Route path="dealership" element={<TractorDealershipPage />} />
          <Route path="seller" element={<SellerProfile />} />
          <Route path="buyer" element={<BuyerProfile />} />
        </Route>

        </Route>

        {/* Protected routes */}
       
        {/* 404 page */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );

}

export default App;
