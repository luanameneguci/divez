// BuyerDashboard.js
import React from "react";
import Dashboard from "../../components/buyer/Dashboard";


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
    <Dashboard />
  )
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
