// BuyerDashboard.js

import React from "react";
import notificationicon from "../../images/notification.png";
import Dashboard from "../../components/buyer/Dashboard";


const BuyerDashboard = () => {

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
