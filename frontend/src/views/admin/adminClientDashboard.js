import React from "react";
import "../../App.css";
import notificationicon from "../../images/notification.png";
import Box from '../../components/admin/Box';
import ProductsListBox from '../../components/admin/ProductsListBox';
import BudgetListBox from '../../components/admin/BudgetListBox';

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

<<<<<<< Updated upstream
=======
function Box(props) {
    return (
        <div className="box-container bg-white col-auto roundbg d-flex px-4 py-4 admin-box-maxw">
            <div className="col-10">
                <span className="box-title d-flex justify-content-start"><strong><h6>{props.title}</h6></strong></span>
                <span className="box-number d-flex justify-content-start pt-2"><strong><h2>{props.number}</h2></strong></span>
            </div>
            <div>
                <img src={props.image} alt="" className="box-image ms-3" />
            </div>
        </div>
    );
}

function ClientProductsBox() {

  return (
    <div className="box-container bg-white roundbg d-flex h-100 position-relative">
      <div className="col-12">
        <h3 className="text-start p-3">Products</h3>
        <table className="container text-start">
          <thead className="text-white mainblue-bg">
            <tr>
              <th className="ps-4 py-2">Product Name</th>
              <th className="ps-4 py-2">Licences</th>
              <th className="ps- py-2">Status</th>
            </tr>
          </thead>
          <tbody>
            {rows3.map((row, rowIndex) => (
              <tr key={rowIndex}>
                {row.map((data, colIndex) => {
                  let spanStyle = {};
                  if (colIndex === row.length - 1) {
                    // Check if it's the last column
                    spanStyle.textAlign = "center";
                    if (data === "Updated") {
                      spanStyle.backgroundColor = "#00B69B";
                      spanStyle.color = "#fff";
                      spanStyle.borderRadius = "20px";
                      spanStyle.fontWeight = "500";
                    } else if (data === "Outdated") {
                      spanStyle.textAlign = "center";
                      spanStyle.backgroundColor = "#FD5454";
                      spanStyle.color = "#fff";
                      spanStyle.borderRadius = "20px";
                      spanStyle.fontWeight = "500";
                    }
                  }
                  return (
                    <td
                      key={colIndex}
                      style={{
                        padding: "10px 10px",
                      }}
                    >
                      <span
                        style={{
                          ...spanStyle,
                          padding: "4px 15px",
                          display: "inline-block",
                        }}
                      >
                        {data}
                      </span>
                    </td>
                  );
                })}
              </tr>
            ))}
          </tbody>
        </table>
          <button className="btn btn-outline-dark hover position-absolute bottom-0 start-50 translate-middle-x my-4">See more</button>
      </div>
    </div>
  );
}

function ClientBudgetsBox() {
    return (
        <div className="box-container bg-white roundbg d-flex h-100">
            <div className="col-12">
                <h3 className='text-start p-3'>Budgets</h3>

                <table className='container-fluid text-start py-4'>
                    <thead className='text-white mainblue-bg'>
                        <tr>
                            <th className="ps-2 py-2">Budget Nº</th>
                            <th className="ps-3 py-2">Client</th>
                            <th className="ps-3 py-2">Status</th>
                        </tr>
                    </thead>
                    <tbody>
                        {rows4.map((row, rowIndex) => (
                            <tr key={rowIndex}>
                                {row.map((data, colIndex) => {
                                    let color = 'inherit';
                                    if (colIndex === 2) { // Check the value in the last column
                                        if (data === 'New') color = '#FFD56D'; //amarelo
                                        else if (data === 'Rejected') color = '#EB5757'; // vermelho
                                        else if (data === 'Paid') color = '#00B69B'; // verde
                                        else if (data === 'Waiting') color = '#2D9CDB'; //azul
                                    }
                                    return (
                                        <td
                                            key={colIndex}
                                            style={{
                                                color: color,
                                                padding: '10px 3%',
                                                width: '33.33%'
                                            }}
                                        >
                                            {data}
                                        </td>
                                    );
                                })}
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}

>>>>>>> Stashed changes
export default AdminClientDashboard;

