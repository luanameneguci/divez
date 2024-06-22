import React from "react";
import "../../App.css";
import notificationicon from "../../images/notification.png";

import Box from "./Box";
import BoxTable from "./BoxTable";
import BoxManager from "./BoxManager";
import BoxProgress from "./BoxProgress";
import BoxThird from "./BoxThird";

const BuyerDashboard = () => {
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

  let data = [
    { nome: "Adobe Photoshop", numeroTotal: 1000, numeroAtivos: 750 },
    { nome: "Adobe Illustrator", numeroTotal: 900, numeroAtivos: 500 },
    { nome: "Adobe Animate", numeroTotal: 900, numeroAtivos: 900 },
    { nome: "Adobe After Effects", numeroTotal: 800, numeroAtivos: 500 },
];


  const managerData  = [
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

  return (
    <div>
      <div className="bg-light w-100">
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
            <BoxTable title="Pending budgets" rows={rows} />
          </div>
          <div className="col-4">
            <BoxProgress title="Your most used licences" data={data}/>
          </div>
          <div className="col-4">
          <BoxManager title="Managers" managers={managerData} />
          </div>
        </div>
      </div>
      <div className="col-12">
        <BoxThird title="Managers" />
      </div>
    </div>
  );
};

export default BuyerDashboard;
