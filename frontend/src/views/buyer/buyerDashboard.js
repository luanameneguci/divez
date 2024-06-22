// BuyerDashboard.js

import React from "react";
import notificationicon from "../../images/notification.png";
import Box from "../../components/buyer/Box";
import BoxTable from "../../components/buyer/BoxTable";
import BoxManager from "../../components/buyer/BoxManager";
import BoxProgress from "../../components/buyer/BoxProgress";
import BoxThird from "../../components/buyer/BoxThird";

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

  let data = [
    { nome: "Adobe Photoshop", numeroTotal: 1000, numeroAtivos: 750 },
    { nome: "Adobe Illustrator", numeroTotal: 900, numeroAtivos: 500 },
    { nome: "Adobe Animate", numeroTotal: 900, numeroAtivos: 900 },
    { nome: "Adobe After Effects", numeroTotal: 800, numeroAtivos: 500 },
];


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

const result = createDataArrays(data);
const resultado = calculatePercentages(result);

  return (
    <div className="container bg-light w-100">
            <h3 className="title my-2">Dashboard</h3>
            <div className="container text-center">
                <div className="d-flex justify-content-between">
                    <div className="col mx-1">
                        <Box title="Pending tickets" number="20" image={notificationicon} evolution="10" />
                    </div>
                    <div className="col mx-1">
                        <Box title="Pending Sales" number="20" image={notificationicon} evolution="10" />
                    </div>
                    <div className="col mx-1">
                        <Box title="Inactive Licences" number="20" image={notificationicon} evolution="10" />
                    </div>
                    <div className="col mx-1">
                        <Box title="Active Licences" number="20" image={notificationicon} evolution="10" />
                    </div>
                </div>
      <div className="col-12 text-center py-4">
        <div className="row">
          <div className="col-4">
            <BoxTable title="Pending budgets" rows={rows} />
          </div>
          <div className="col-4">
            <BoxProgress title="Your most used licences" resultado={resultado} />
          </div>
          <div className="col-4">
            <BoxManager title="Managers" managers={managers} />
          </div>
        </div>
      </div>
      <div className="col-12">
        <BoxThird title="Managers" />
      </div>
    </div>
    </div>
  );
};

export default BuyerDashboard;


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