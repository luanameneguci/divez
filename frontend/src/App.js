import './App.css'; // Importa os estilos

import AdminMenu from './views/admin/adminMenu'; // Importa o menu do Admin
import BuyerMenu from './views/buyer/buyerMenu'; // Importa o menu do Comprador
import ManagerMenu from './views/manager/managerMenu'; // Importa o menu do Manager


function App() {
  return (
    <div>
      <ManagerMenu />
    </div>

  );
}

export default App;
