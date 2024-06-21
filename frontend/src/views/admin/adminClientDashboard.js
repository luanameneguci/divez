import React from "react";
import "../../App.css";
import notificationicon from "../../images/notification.png";
import Box from '../../components/Box';
import ProductsListBox from '../../components/ProductsListBox';
import BudgetListBox from '../../components/BudgetListBox';

const numRowsToShow = 5;

const AdminClientDashboard = () => {

  return (
    <div className="container bg-light w-100">
      <h2 className="title m-3">Client Name</h2>
      <div className="text-center">
        <div className="d-flex justify-content-between">
          <div className="col mx-3 bg-white rounded shadow">
            <Box
              title="Pending tickets"
              number="20"
              image={notificationicon}
            />
          </div>
          <div className="col mx-3 bg-white rounded shadow">
            <Box
              title="Pending Sales"
              number="20"
              image={notificationicon}
            />
          </div>
          <div className="col mx-3 bg-white rounded shadow">
            <Box
              title="Inactive Licences"
              number="20"
              image={notificationicon}
            />
          </div>
          <div className="col mx-3 bg-white rounded shadow">
            <Box
              title="Active Licences"
              number="20"
              image={notificationicon}
            />
          </div>

        </div>
        <div className="col-12 d-flex my-4 rounded">
          <div className="col mx-3 rounded shadow">
            <ProductsListBox />
          </div>
          <div className="col mx-3 rounded shadow">
            <div className="col-12">
              <h3 className='text-start p-3'>Budgets</h3>
              <BudgetListBox numRowsToShow={numRowsToShow}/>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminClientDashboard;

