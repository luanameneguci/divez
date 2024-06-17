import React, { useState, useEffect } from "react";
import "../../App.css";
import notificationicon from "../../images/notification.png";
// import axios from "axios";

const box3content = [
  1, 'Calls are not being received', '10.12.2024', 'Programming', 1, 'New',
  1, 'Calls are not being received', '10.12.2024', 'Programming', 1, 'New',
  1, 'Calls are not being received', '10.12.2024', 'Programming', 1, 'New',
  1, 'Calls are not being received', '10.12.2024', 'Programming', 1, 'New',
  1, 'Calls are not being received', '10.12.2024', 'Programming', 1, 'New',
  1, 'Calls are not being received', '10.12.2024', 'Programming', 1, 'New',
];

// Split the box3content array into rows of 6 items each
const rows3 = [];
const itemsPerRow2 = 6;
for (let i = 0; i < box3content.length; i += itemsPerRow2) {
  rows3.push(box3content.slice(i, i + itemsPerRow2));
}

const tablecontent = [
  1, "Name Application", "New",
  2, "Name Application", "New",
  3, "Name Application", "New",
  4, "Name Application", "New",
  5, "Name Application", "New",
  6, "Name Application", "New",
];

// Split the tablecontent array into rows of 3 items each
const rows = [];
const itemsPerRow = 3;
for (let i = 0; i < tablecontent.length; i += itemsPerRow) {
  rows.push(tablecontent.slice(i, i + itemsPerRow));
}

const AdminDashboard = () => {
  // const [budgetStatus, setdataBudgetStatus] = useState([]);
  
  // useEffect(() => {
  //   const url = "http://localhost:8080/budgetStatus/list";
  //   axios.get(url)
  //     .then((res) => {  
  //       if (res.status === 200) {
  //         const dataBudgetStatus = res.data;
  //         setdataBudgetStatus(dataBudgetStatus);
  //       } else {
  //         alert("Error Web Service!");
  //       }
  //     })
  //     .catch((error) => {
  //       alert(error);
  //     });
  // }, []);
   
  // const pendingBudgets = budgetStatus.filter((budgetStatus) => budgetStatus.budgetStatusDescript === "Pending").length;

  return (
    <div>
      <div className="dashboard-content h-100 bg-light w-100">
        <h2 className="title py-3">Dashboard</h2>
        <div className="col-12 text-center">
          <div className="row">
            <div className="col">
              <Box title="Pending budgets" number="" image={notificationicon} />
            </div>
            <div className="col">
              <Box title="Active Licenses" number="2000" image={notificationicon} />
            </div>
            <div className="col">
              <Box title="Linked Users" number="200" image={notificationicon} />
            </div>
          </div>
        </div>
      </div>
      <div className="col-12 text-center py-4">
        <div className="row">
          <div className="col-4">
            <BoxTable title="Pending budgets" />
          </div>
          <div className="col-4">
            <BoxProgress title="Your most used licences" />
          </div>
          <div className="col-4">
            <BoxManager title="Managers" />
          </div>
        </div>
      </div>
      <div className="col-12">
        <BoxThird title="Managers" />
      </div>
    </div>
  );

  function Box({ title, number, image }) {
    return (
      <div className="box-container bg-white col-auto rounded d-flex px-4 py-4 shadow">
        <div className="col-10">
          <span className="box-title d-flex justify-content-start">
            <strong>
              <h6>{title}</h6>
            </strong>
          </span>
          <span className="box-number d-flex justify-content-start pt-2">
            <strong>
              <h2>{number}</h2>
            </strong>
          </span>
        </div>
        <div>
          <img src={image} alt="" className="box-image ms-3" />
        </div>
      </div>
    );
  }

  function BoxTable({ title }) {
    return (
      <div className="box-container bg-white col-auto rounded d-flex shadow" style={{ height: 360 + "px" }}>
        <div className="col-12">
          <span className="box-title d-flex justify-content-start pt-3 ps-3 pb-3">
            <strong>
              <h4>{title}</h4>
            </strong>
          </span>
          <table className="container-fluid text-start bg-info py-4 rounded col-11">
            <thead>
              <tr>
                <th className="ps-3 py-2 text-white">Budget Nº</th>
                <th className="ps-3 py-2 text-white">Budget title</th>
                <th className="ps-3 py-2 text-white">Status</th>
              </tr>
            </thead>
            <tbody className="bg-white rounded">
              {rows.map((row, rowIndex) => (
                <tr className="rounded" key={rowIndex}>
                  {row.map((data, colIndex) => (
                    <td className="ps-3 py-1 border-bottom" key={colIndex} style={{ height: 40 + "px" }}>
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

  function BoxManager({ title }) {
    return (
      <div className="box-container bg-white col-auto rounded d-flex shadow" style={{ height: 360 + "px" }}>
        <div className="col-12">
          <span className="box-title d-flex justify-content-start pt-3 ps-3 pb-3">
            <strong>
              <h4>{title}</h4>
            </strong>
          </span>
          <div>
            <ManagersList managers={managers} />
          </div>
        </div>
      </div>
    );
  }

  function BoxProgress({ title }) {
    return (
      <div className="box-container bg-white col-auto rounded d-flex shadow" style={{ height: 360 + "px" }}>
        <div className="col-12">
          <span className="box-title d-flex justify-content-start pt-3 ps-3 pb-3">
            <strong>
              <h4>{title}</h4>
            </strong>
          </span>
          <div className="px-3">
            <ProgressDivs resultado={resultado} />
          </div>
        </div>
      </div>
    );
  }

  function createDataArrays(data) {
    let result = [];
    for (let i = 0; i < data.length && result.length < 4; i++) {
      let subArray = [data[i].nome, data[i].numeroTotal, data[i].numeroAtivos];
      result.push(subArray);
    }
    return result;
  }

  function calculatePercentages(result) {
    let resultado = [];
    for (let i = 0; i < result.length; i++) {
      let item = result[i];
      let percentage = (item[2] / item[1]) * 100;
      let newItem = {
        ...item,
        percentage: percentage.toFixed(0),
      };
      resultado.push(newItem);
    }
    return resultado;
  }

  let data = [
    { nome: "Adobe Photoshop", numeroTotal: 1000, numeroAtivos: 750 },
    { nome: "Adobe Illustrator", numeroTotal: 900, numeroAtivos: 500 },
    { nome: "Adobe Animate", numeroTotal: 900, numeroAtivos: 900 },
    { nome: "Adobe After Effects", numeroTotal: 800, numeroAtivos: 500 },
  ];

  const managersData = [
    {
      nome: "João Ratão",
      nomeApp: "Adobe Photoshop",
      status: "Online",
      photo: "https://img.icons8.com/?size=100&id=13677&format=png&color=000000",
    },
    {
      nome: "Candido Faisca",
      nomeApp: "Adobe Illustrator",
      status: "Online",
      photo: "https://img.icons8.com/?size=100&id=13677&format=png&color=000000",
    },
    {
      nome: "Pedro Dias",
      nomeApp: "Adobe After Effects",
      status: "Offline",
      photo: "https://img.icons8.com/?size=100&id=13677&format=png&color=000000",
    },
    {
      nome: "Pedro Dias",
      nomeApp: "Adobe After Effects",
      status: "Offline",
      photo: "https://img.icons8.com/?size=100&id=13677&format=png&color=000000",
    },
  ];

  const managers = managersData.slice(0, 4);
  const result = createDataArrays(data);
  const resultado = calculatePercentages(result);

  function BoxThird({ title }) {
    return (
      <div className="box-container bg-white col-auto rounded d-flex shadow" style={{ height: 360 + "px" }}>
        <div className="col-12">
          <span className="box-title d-flex justify-content-start pt-3 ps-3 pb-3">
            <strong>
              <h4>{title}</h4>
            </strong>
          </span>
          <table className="container-fluid text-start bg-info py-4 rounded col-11">
            <thead>
              <tr>
                <th className="ps-3 py-2 text-white">Ticket Nº</th>
                <th className="ps-3 py-2 text-white">Ticket title</th>
                <th className="ps-3 py-2 text-white">Ticket Date</th>
                <th className="ps-3 py-2 text-white">Category</th>
                <th className="ps-3 py-2 text-white">Priority</th>
                <th className="ps-3 py-2 text-white">Status</th>
              </tr>
            </thead>
            <tbody className="bg-white rounded">
              {rows3.map((row, rowIndex) => (
                <tr className="rounded" key={rowIndex}>
                  {row.map((data, colIndex) => (
                    <td className="ps-3 py-1 border-bottom" key={colIndex} style={{ height: 40 + "px" }}>
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

  function ManagersList({ managers }) {
    return (
      <div>
        {managers.map((manager, index) => (
          <div className="d-flex flex-row px-3 pt-2" key={index}>
            <div className="col-3">
              <img src={manager.photo} alt={manager.nome} className="img-fluid rounded-circle" />
            </div>
            <div className="col-7 ps-4 pt-1">
              <div className="d-flex flex-column">
                <span>
                  <strong>{manager.nome}</strong>
                </span>
                <span>{manager.nomeApp}</span>
                <span>{manager.status}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    );
  }

  function ProgressDivs({ resultado }) {
    return (
      <div>
        {resultado.map((item, index) => (
          <div key={index}>
            <div className="d-flex justify-content-between pt-1">
              <span>{item[0]}</span>
              <span>{item.percentage}%</span>
            </div>
            <div className="progress">
              <div
                className="progress-bar progress-bar-striped bg-info progress-bar-animated rounded"
                role="progressbar"
                style={{ width: item.percentage + "%" }}
                aria-valuenow={item.percentage}
                aria-valuemin="0"
                aria-valuemax="100"
              ></div>
            </div>
          </div>
        ))}
      </div>
    );
  }
};

export default AdminDashboard;
