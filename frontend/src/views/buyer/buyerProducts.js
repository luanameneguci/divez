import React from "react";
import "../../App.css";

const BuyerProductList = () => {

   return (
        <div className="dashboard-content bg-light w-100 h-100">
            <div className='d-flex justify-content-between p-2'>
                <h2 className="title my-2 ">Products</h2>
            </div>
             <BoxProgress props={result}/> 
        </div>

    ); 
}

const ProgressDiv = ({ nome, numeroAtivos, numeroTotal, percentage }) => (
    <div className="mb-3">
      <div className="d-flex justify-content-between">
        <p>
          <strong>{nome}</strong>
        </p>
        <div className="d-flex">
          <p>
            {numeroAtivos} of {numeroTotal}
          </p>
        </div>
      </div>  
      <div className="progress">
        <div
          className="progress-bar"
          role="progressbar"
          style={{ width: `${percentage}%` }}
          aria-valuenow={percentage}
          aria-valuemin="0"
          aria-valuemax="100"
        >
          {percentage}%
        </div>
      </div>
      
    </div>
  );

const ProgressDivs = ({ resultado }) => {
  return (
    <div className="col-12">
      <div className="w-100 d-flex p-3 border-bottom">
        <div className="col-2 mx-2">
          <h5>Name</h5>
        </div>
        <div className="col-2 mx-2">
          <h5>Status</h5>
        </div>
        <div className="col-3 mx-2">
          <h5>Installs</h5>
        </div>
        <div className="col-4 mx-2"></div>
      </div>
      {resultado.map((item, index) => (
        <div className="d-flex col-12 p-3 border-bottom">
          <div className="col-2 mx-2">{item[0]}</div>
          <div className="col-2 mx-2">{item[3]}</div>
          <div className="col-3 mx-2">
           <ProgressDiv
              key={index}
              numeroAtivos={item[2]}
              numeroTotal={item[1]}
              percentage={item.percentage}
            />
          </div>
          <div className="col-4 ms-auto">
            <button className="btn btn-outline-info hover m-2">
              Add manager
            </button>
            <button className="btn btn-outline-info hover m-2">Help</button>
            <button className="btn btn-outline-danger m-2">
              Cancel Subscription
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

/*function Products() {
    return <div className="box-container col-auto roundbg d-flex">
        <div className="col-12 bg-white rounded shadow">
            <table className='container-fluid py-4'>
                <thead className='text-black text-center border-bottom'>
                    <th className="py- col-2">Name</th>
                    <th className="py-2 col-2">Status</th>
                    <th className="py-2 col-4">Installs</th>
                    <th className="py-2 col-4"></th>
                </thead>
                <tbody className='text-center'>
                    {rows.map((row, rowIndex) => (
                        <tr key={rowIndex} className='border-bottom'>
                            {row.map((data, colIndex) => (
                                <td
                                    key={colIndex}
                                    className='border-product py-4'
                                    style={{
                                        color: colIndex === 6 ? '#FFD56D' : 'inherit',
                                    }}
                                >
                                    {data}
                                </td>

                            ))}
                            <td className='d-flex'>
                            <button className='btn btn-outline-info hover m-3'>Add manager</button>
                            <button className='btn btn-outline-info hover m-3'>Help</button>
                            <button className='btn btn-outline-danger  m-3'>Cancel Subscription</button></td>

                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    </div>
}*/

// Example usage
let data = [
  {
    nome: "Adobe photoshop",
    numeroTotal: 1000,
    numeroAtivos: 750,
    status: "Updated",
  },
  {
    nome: "Adobe Illustrator",
    numeroTotal: 900,
    numeroAtivos: 500,
    status: "Updated",
  },
  {
    nome: "Adobe Animate",
    numeroTotal: 900,
    numeroAtivos: 900,
    status: "Updated",
  },
  {
    nome: "Adobe After Effects",
    numeroTotal: 800,
    numeroAtivos: 500,
    status: "Updated",
  },
  {
    nome: "Adobe After Effects",
    numeroTotal: 800,
    numeroAtivos: 600,
    status: "Updated",
  },
  {
    nome: "Adobe After Effects",
    numeroTotal: 800,
    numeroAtivos: 500,
    status: "Updated",
  },
];

function createDataArrays(data) {
  // Initialize the result array
  let result = [];

  // Loop through the data and create sub-arrays
  for (let i = 0; i < data.length; i++) {
    let subArray = [
      data[i].nome,
      data[i].numeroTotal,
      data[i].numeroAtivos,
      data[i].status,
    ];
    result.push(subArray);
  }

  // Return the result containing a maximum of 4 sub-arrays
  return result;
}

function calculatePercentages(result) {
  // Initialize the result array
  let resultado = [];

  // Loop through the data and create sub-arrays with percentage
  for (let i = 0; i < result.length; i++) {
    let item = result[i];
    let percentage = (item[2] / item[1]) * 100;
    // Create a new object with the original values and the calculated percentage
    let newItem = {
      ...item,
      percentage: percentage.toFixed(0), // Fix to 2 decimal places
    };
    resultado.push(newItem);
  }

  // Return the result array
  return resultado;
}

function BoxProgress(props) {
  return (
    <div className="box-container bg-white col-auto rounded d-flex shadow">
      <div className="col-12">
        <div className="col-12">
         <ProgressDivs resultado={resultado} />
        </div>
      </div>
    </div>
  );
}

let result = createDataArrays(data);
let resultado = calculatePercentages(result);
export default BuyerProductList;
