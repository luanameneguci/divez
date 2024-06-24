import React from "react";
import "../../App.css";

const BuyerProductList = () => {
  return (
    <div className="dashboard-content bg-light w-100 h-100">
      <div className="d-flex justify-content-between p-2 mx-3">
        <h2 className="title my-2 ">Products</h2>
      </div>
      <BoxProgress props={result} />
    </div>
  );
};

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
        className="progress-bar bg-info"
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
  const getStatusClass = (status) => {
    switch (status) {
      case "Outdated":
        return "text-outdated";
      case "Disabled":
        return "text-disabled";
      case "Updated":
        return "text-updated";
      default:
        return "";
    }
  };
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
          <div className="col-2 mx-2 d-flex ">
            <h5 className="my-auto">{item[0]}</h5>
          </div>
          <div className="col-2 mx-2 d-flex">
            <p className={`my-auto ${getStatusClass(item[3])}`}>{item[3]}</p>
          </div>
          <div className="col-3 mx-2">
            <ProgressDiv
              key={index}
              numeroAtivos={item[2]}
              numeroTotal={item[1]}
              percentage={item.percentage}
            />
          </div>
          <div className="col-4 ms-auto">
            <button className="col btn btn-outline-info hover m-2">
              Add manager
            </button>
            <button className="col btn btn-outline-info hover m-2">Help</button>
            <button className="col btn btn-outline-danger m-2">
              Cancel Subscription
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

let data = [
  {
    nome: "Adobe photoshop",
    numeroTotal: 1000,
    numeroAtivos: 750,
    status: "Outdated",
  },
  {
    nome: "Adobe Illustrator",
    numeroTotal: 900,
    numeroAtivos: 500,
    status: "Outdated",
  },
  {
    nome: "Adobe Animate",
    numeroTotal: 900,
    numeroAtivos: 900,
    status: "Disabled",
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
    <div className="box-container bg-white col-auto roundbg d-flex shadow mx-4">
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
