import React from "react";
import "../../App.css";
import notificationicon from "../../images/notification.png";   

const AdminDashboard = () => {
  return (
    <div className="dashboard-content h-100 bg-light w-100">
            <h4 className="title px-4 py-3">Dashboard</h4>
            <div class="container text-center">
                <div class="row">
                    <div class="col">
                        <Box title="Pending budgets" number="20" image={notificationicon} evolution="10" />
                    </div>
                    <div class="col">
                        <Box title="Active Licenses" number="2000" image={notificationicon} evolution="10" />
                    </div>
                    <div class="col">
                        <Box title="Linked Users" number="200" image={notificationicon} evolution="10" />
                    </div>
                </div>
            </div>
        </div>
  );
};

function Box(props) {
    return <div className="box-container bg-white col-auto rounded d-flex px-4 py-4">
        <div className="col-10">
        <span className="box-title d-flex justify-content-start"><strong><h6>{props.title}</h6></strong></span>
        <span className="box-number d-flex justify-content-start pt-2"><strong><h2>{props.number}</h2></strong></span>
        <span className="box-evolution d-flex justify-content-bottom pt-2">{props.evolution}% more than yesterday </span>
        </div>
        <div>
        <img src={props.image} alt="" className="box-image ms-3" />
        </div>
    </div>;
}
export default AdminDashboard;
