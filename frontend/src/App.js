

import './App.css';
import BuyerDashboard from './components/buyer/Dashboard';

import Login from "./views/All/login";

import AdminMenu from "./views/admin/adminMenu"; // Importa o menu do Admin
import BuyerMenu from "./views/buyer/buyerMenu"; // Importa o menu do Comprador
import ManagerMenu from "./views/manager/managerMenu"; // Importa o menu do Manager
import Menu from "./views/All/menu";

function App() {

  return (
    <div>

      <BuyerDashboard />

    </div>
  );
}

export default App;
