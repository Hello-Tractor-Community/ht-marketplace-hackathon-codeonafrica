import React, { useState } from 'react';
import {
  FaChevronLeft,
  FaChevronRight,
  FaUser,
  FaTractor,
  FaTools,
  FaBuilding,
  FaCog,
  FaTags,
} from 'react-icons/fa';
import { Link } from 'react-router-dom';

const MegaSidebar = () => {
  const [collapsed, setCollapsed] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);

  const menuData = [
    {
      name: "Users",
      path: "/users",
      icon: <FaUser />,
      dropdown: [
        { name: "Add New User", path: "/users/add" },
        { name: "View All Users", path: "/users/view" },
        { name: "Roles & Permissions", path: "/users/roles" },
      ],
    },
    {
      name: "Dealerships",
      path: "/dealerships",
      icon: <FaBuilding />,
      dropdown: [
        { name: "Add New Dealership", path: "/dealerships/add" },
        { name: "View All Dealerships", path: "/dealerships/view" },
        { name: "Dealership Categories", path: "/dealerships/categories" },
      ],
    },
    {
      name: "Tractors",
      path: "/tractors",
      icon: <FaTractor />,
      dropdown: [
        { name: "Add New Tractor", path: "/tractors/add" },
        { name: "View All Tractors", path: "/tractors/view" },
        {
          name: "Categories",
          path: "/tractors/categories",
          dropdown: [
            { name: "Compact Tractors", path: "/tractors/categories/compact" },
            { name: "Utility Tractors", path: "/tractors/categories/utility" },
            { name: "Row Crop Tractors", path: "/tractors/categories/row-crop" },
          ],
        },
      ],
    },
    {
      name: "Equipments",
      path: "/equipments",
      icon: <FaTools />,
      dropdown: [
        { name: "Add New Equipment", path: "/equipments/add" },
        { name: "View All Equipment", path: "/equipments/view" },
        {
          name: "Categories",
          path: "/equipments/categories",
          dropdown: [
            { name: "Harvesting Equipment", path: "/equipments/categories/harvesting" },
            { name: "Planting Equipment", path: "/equipments/categories/planting" },
            { name: "Tillage Equipment", path: "/equipments/categories/tillage" },
          ],
        },
      ],
    },
    {
      name: "Brands",
      path: "/brands",
      icon: <FaTags />,
      dropdown: [
        { name: "Add New Brand", path: "/brands/add" },
        { name: "View All Brands", path: "/brands/view" },
      ],
    },
    {
      name: "Settings",
      path: "/settings",
      icon: <FaCog />,
      dropdown: [
        { name: "Profile Settings", path: "/settings/profile" },
        { name: "General Settings", path: "/settings/general" },
      ],
    },
  ];

  const toggleSidebar = () => {
    setCollapsed(!collapsed);
  };

  const handleDropdownToggle = (index) => {
    setActiveDropdown(activeDropdown === index ? null : index);
  };

  return (
    <div
      className={`flex ${collapsed ? 'w-20' : 'w-80'} h-screen bg-black/80 text-white transition-all duration-300`}
    >
      <div className="flex flex-col w-full">
        {/* Toggle Button */}
        <div className="flex justify-between items-center p-4">
          <button onClick={toggleSidebar} className="text-white">
            {collapsed ? <FaChevronRight size={20} /> : <FaChevronLeft size={20} />}
          </button>
        </div>

        {/* Menu Items */}
        <div className="flex flex-col overflow-auto">
          {menuData.map((menu, index) => (
            <div key={index} className="flex flex-col">
              {/* Main Menu Item */}
              <div
                className={`flex items-center p-3 hover:bg-[#ff481d] cursor-pointer ${
                  collapsed ? 'justify-center' : ''
                }`}
                onClick={() => (menu.dropdown ? handleDropdownToggle(index) : null)}
              >
                {menu.icon}
                {!collapsed && <span className="ml-2">{menu.name}</span>}
              </div>

              {/* Dropdown Items */}
              {menu.dropdown && activeDropdown === index && !collapsed && (
                <div className="ml-6">
                  {menu.dropdown.map((subItem, subIndex) =>
                    subItem.dropdown ? (
                      <div key={subIndex} className="flex flex-col">
                        {/* Submenu Parent */}
                        <div className="flex items-center p-2 hover:bg-[#ff481d] cursor-pointer">
                          <span>{subItem.name}</span>
                        </div>
                        {/* Submenu Children */}
                        <div className="ml-4">
                          {subItem.dropdown.map((child, childIndex) => (
                            <Link
                              key={childIndex}
                              to={child.path}
                              className="flex items-center p-2 hover:bg-[#ff481d]"
                            >
                              <span>{child.name}</span>
                            </Link>
                          ))}
                        </div>
                      </div>
                    ) : (
                      <Link
                        key={subIndex}
                        to={subItem.path}
                        className="flex items-center p-2 hover:bg-[#ff481d]"
                      >
                        <span>{subItem.name}</span>
                      </Link>
                    )
                  )}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MegaSidebar;
