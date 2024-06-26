import './App.css';
import React, { useState } from 'react';
import BuyerDashboard from './components/buyer/Dashboard';
import Login from "./views/All/login";
import AdminMenu from "./views/admin/adminMenu"; // Importa o menu do Admin
import BuyerMenu from "./views/buyer/buyerMenu"; // Importa o menu do Comprador
import ManagerMenu from "./views/manager/managerMenu"; // Importa o menu do Manager
import Menu from "./views/All/menu";



function App() {
const userRole = "buyer";

  // Function to render menu based on user role
  const renderMenu = () => {
    switch (userRole) {
      case "admin":
        return <AdminMenu />;
      case "buyer":
        return <BuyerMenu />;
      case "manager":
        return <ManagerMenu />;
      default:
        return <Menu />;
    }
  };

  return (
    <div>
      {/* Render the appropriate menu based on user role */}
      {renderMenu()}
    </div>
  );
}

export default App;
