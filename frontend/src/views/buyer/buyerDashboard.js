import React, { useState, useEffect } from "react";
import "../../App.css";
import notificationicon from "../../images/notification.png";
//const axios = require('axios');

var coiso = 100;

const tablecontent = [
  1,
  "Name Aplication",
  "New",
  2,
  "Name Aplication",
  "New",
  3,
  "Name Aplication",
  "New",
  4,
  "Name Aplication",
  "New",
  5,
  "Name Aplication",
  "New",
  6,
  "Name Aplication",
  "New",
];

// Split the tablecontent array into rows of 6 items each
const rows = [];
const itemsPerRow = 3;

for (let i = 0; i < 18; i += itemsPerRow) {
  rows.push(tablecontent.slice(i, i + itemsPerRow));
}

const AdminDashboard = () => {
  return (
    <div className="dashboard-content h-100 bg-light w-100">
      <h4 className="title px-4 py-3">Dashboard</h4>
      <div class="container text-center">
        <div class="row">
          <div class="col">
            <Box
              title="Pending budgets"
              number="20"
              image={notificationicon}
              evolution="10"
            />
          </div>
          <div class="col">
            <Box
              title="Active Licenses"
              number="2000"
              image={notificationicon}
              evolution="10"
            />
          </div>
          <div class="col">
            <Box
              title="Linked Users"
              number="200"
              image={notificationicon}
              evolution="10"
            />
          </div>
        </div>
      </div>
      <div class="container text-center py-4">
        <div class="row">
          <div class="col-4">
            {/*Aqui vai ser o boxsecond*/}
            <BoxTable title="Pending budgets" />
          </div>
          <div class="col-4">
            {/*Aqui vai ser o boxsecond*/}
            <BoxProgress title="Your most used licences" />
          </div>
          <div class="col-4">
            {/*Aqui vai ser o boxsecond*/}
            <BoxManager title="Managers" />
          </div>
        </div>
      </div>
      <div className="col-12">
        <TicketsBox />
      </div>
    </div>
  );
};

function Box(props) {
  return (
    <div className="box-container bg-white col-auto rounded d-flex px-4 py-4">
      <div className="col-10">
        <span className="box-title d-flex justify-content-start">
          <strong>
            <h6>{props.title}</h6>
          </strong>
        </span>
        <span className="box-number d-flex justify-content-start pt-2">
          <strong>
            <h2>{props.number}</h2>
          </strong>
        </span>
        <span className="box-evolution d-flex justify-content-bottom pt-2">
          {props.evolution}% more than yesterday{" "}
        </span>
      </div>
      <div>
        <img src={props.image} alt="" className="box-image ms-3" />
      </div>
    </div>
  );
}

function BoxTable(props) {
  return (
    <div
      className="box-container bg-white col-auto rounded d-flex"
      style={{ height: 360 + "px" }}
    >
      <div className="col-12">
        <span className="box-title d-flex justify-content-start pt-3 ps-3 pb-3">
          <strong>
            <h4>{props.title}</h4>
          </strong>
        </span>
        {/*Aqui vai ser o conteudo de cada um individual (tipo <adminDashboard />*/}
        <table
          className="container-fluid text-start mainblue-bg py-4 rounded"
          style={{ height: 290 + "px" }}
        >
          <thead>
            <th className="ps-3 py-2 text-white">Budget Nº</th>
            <th className="ps-3 py-2 text-white">Budget title</th>
            <th className="ps-3 py-2 text-white">Status</th>
          </thead>
          <tbody className="bg-white rounded">
            {rows.map((row, rowIndex) => (
              <tr className="rounded" key={rowIndex}>
                {row.map((data, colIndex) => (
                  <td className="ps-3 py-1 border-bottom" key={colIndex}>
                    {data}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

function BoxManager(props) {
  return (
    <div
      className="box-container bg-white col-auto rounded d-flex"
      style={{ height: 360 + "px" }}
    >
      <div className="col-12">
        <span className="box-title d-flex justify-content-start pt-3 ps-3 pb-3">
          <strong>
            <h4>{props.title}</h4>
          </strong>
        </span>
        <div>
          <ManagersList managers={managers} />
        </div>  
      </div>
    </div>
  );
}

function BoxProgress(props) {
  return (
    <div
      className="box-container bg-white col-auto rounded d-flex"
      style={{ height: 360 + "px" }}
    >
      <div className="col-12">
        <span className="box-title d-flex justify-content-start pt-3 ps-3 pb-3">
          <strong>
            <h4>{props.title}</h4>
          </strong>
        </span>
        {/*Aqui vai ser o conteudo de cada um individual (tipo <adminDashboard />*/}
        <div className="px-3">
          <ProgressDivs resultado={resultado} />
        </div>
      </div>
    </div>
  );
}

function createDataArrays(data) {
  // Initialize the result array
  let result = [];

  // Loop through the data and create sub-arrays
  for (let i = 0; i < data.length && result.length < 4; i++) {
    let subArray = [data[i].nome, data[i].numeroTotal, data[i].numeroAtivos];
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

// Example usage
let data = [
  { nome: "Adobe photoshop", numeroTotal: 1000, numeroAtivos: 750 },
  { nome: "Adobe Illustrator", numeroTotal: 900, numeroAtivos: 500 },
  { nome: "Adobe Animate", numeroTotal: 900, numeroAtivos: 900 },
  { nome: "Adobe After Effects", numeroTotal: 800, numeroAtivos: 500 },
];

const managersData = [
  {
    nome: "João Ratão",
    nomeApp: "Adobe photoshop",
    status: "Online",
    photo: "https://img.icons8.com/?size=100&id=13677&format=png&color=000000",
  },
  {
    nome: "Candido Faisca",
    nomeApp: "Adobe Illustrator",
    status: "Online",
    photo: "https://img.icons8.com/?size=100&id=13631&format=png&color=000000",
  },
  {
    nome: "Iuri Pires",
    nomeApp: "Adobe Animate",
    status: "Offline",
    photo:
      "https://img.icons8.com/?size=100&id=FK8AfMKCrwOU&format=png&color=000000",
  },
  {
    nome: "Adobe After Effects",
    nomeApp: "Adobe photoshop",
    status: "Ativo",
    photo: "https://img.icons8.com/?size=100&id=108781&format=png&color=000000",
  },
];

const boxProductsContent = [
  "1", 'Adobe Photoshop', '20/10/2024', "Department", '1', 'New',
  "2", 'Adobe Photoshop', '20/10/2024', "Department", '2', 'New',
  "3", 'Adobe Photoshop', '20/10/2024', "Department", '3', 'New',
  "4", 'Adobe Photoshop', '20/10/2024', "Department", '1', 'Working',
  "5", 'Adobe Photoshop', '20/10/2024', "Department", '1', 'Working',
];

// Split the boxProductsContent array into rows of 3 items each
const rows3 = [];
const itemsPerRowTwo = 6;

for (let i = 0; i < boxProductsContent.length; i += itemsPerRowTwo) {
  rows3.push(boxProductsContent.slice(i, i + itemsPerRowTwo));
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
    <div>
      {resultado.map((item, index) => (
        <ProgressDiv
          key={index}
          nome={item[0]}
          numeroAtivos={item[2]}
          numeroTotal={item[1]}
          percentage={item.percentage}
        />
      ))}
    </div>
  );
};

function createDataArraysManager(manager) {
  // Initialize the result array
  let managers = [];

  // Loop through the data and create sub-arrays
  for (let i = 0; i < manager.length && managers.length < 3; i++) {
    let subArray = [
      manager[i].nome,
      manager[i].nomeApp,
      manager[i].status,
      manager[i].photo,
    ];
    managers.push(subArray);
  }
  return managers;
}

const UserStatus = ({ userData }) => {
  const statusColor = userData[2] === "Online" ? "LightGreen" : "Lightgrey";

  return (
    <div className="col-12 d-flex align-items-center p-3 justify-content-between">
      <div className="d-flex align-items-center">
        <img
          src={userData[3]}
          alt={`${userData[1]}`}
          className="mr-3"
          style={{ width: "60px", height: "60px", borderRadius: "50%" }}
        />
        <div className="d-flex flex-column align-items-start">
          <h5 className="mb-0">{userData[0]}</h5>
          <h6 className="mb-0">{userData[1]}</h6>
        </div>
      </div>
      <div className="d-flex align-items-center">
        <div
          className="ms-auto me-1"
          style={{
            width: "20px",
            height: "20px",
            borderRadius: "50%",
            backgroundColor: statusColor,
          }}
        ></div>
        <p className="mb-0">{userData[2]}</p>
      </div>
    </div>
  );
};

const ManagersList = ({ managers }) => {
  return (
    <div className="managers-list">
      {managers.map((manager, index) => (
        <div className="d-flex justify-content-between border-bottom align-items-center" style={{height: 97 + "px"}}>
          <UserStatus userData={manager} />
        </div>
      ))}
    </div>
  );
};

function TicketsBox() {
  return (
      <div className="box-container bg-white roundbg d-flex h-100">
          <div className="col-12">
              <h4 className='text-start p-2 mx-3 my-3'>Tickets</h4>
              <table className='text-start m-0 w-100'>
                  <thead className='text-white mainblue-bg'>
                      <tr>
                          <th className="ps-4 py-2">Ticket Nº</th>
                          <th className="ps-4 py-2">Title</th>
                          <th className="ps-4 py-2">Date</th>
                          <th className="ps-4 py-2">Department</th>
                          <th className="ps-4 py-2">Priority</th>
                          <th className="ps-4 py-2">Status</th>
                      </tr>
                  </thead>
                  <tbody>
                      {rows3.map((row, rowIndex) => (
                          <tr key={rowIndex}>
                              {row.map((data, colIndex) => {
                                  let spanStyle = {};
                                      return (
                                          <td
                                              key={colIndex}
                                              style={{
                                                  padding: '10px',
                                              }}
                                          >
                                              <span style={{ ...spanStyle, padding: '4px 15px', display: 'inline-block' }}>
                                                  {data}
                                              </span>
                                          </td>
                                      );
                              })}
                          </tr>
                      ))}
                  </tbody>
              </table>
              <div className="mt-2">
                  <button className='btn btn-outline-dark'>See more</button>
              </div>
          </div>
      </div >
  );
}

let result = createDataArrays(data);
let resultado = calculatePercentages(result);
let managers = createDataArraysManager(managersData);
console.log(managers);
export default AdminDashboard;
