import React from 'react';
import { Outlet } from 'react-router-dom'; // Make sure to import Outlet
import Sidebar from '../Components/Sidebar';
import TopNav from '../Components/Admin/TopNav';

const AdminLayout = () => {
  return (
    <div className="flex ">
      {/* Sidebar Component */}
      <div className="">
        <Sidebar/>
      </div>

      {/* Content Area: This is where the nested routes will be rendered */}
      <div className="w-full">
        <TopNav/>
        <Outlet /> {/* This renders the child routes */}
      </div>
    </div>
  );
};

export default AdminLayout;
