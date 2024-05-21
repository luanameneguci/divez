import React from 'react';
import '../../App.css';
import notificationicon from "../../images/notification.png";

const AdminDashboard = () => {
    return (
        <div className="dashboard-content bg-dark w-100">
            <h4 className="title">Dashboard</h4>
            <div class="container text-center">
                <div class="row">
                    <div class="col">
                        <Box title="Pending tickets" number="20" image={notificationicon} evolution="10" />
                    </div>
                    <div class="col">
                        <Box title="Pending tickets" number="20" image={notificationicon} evolution="10" />
                    </div>
                    <div class="col">
                        <Box title="Pending tickets" number="20" image={notificationicon} evolution="10" />
                    </div>
                    <div class="col">
                        <Box title="Pending tickets" number="20" image={notificationicon} evolution="10" />
                    </div>
                </div>
            </div>
        </div>

    );
}
function Box(props) {
    return <div className="box-container bg-white col-auto rounded p-3 d-flex">
        <div className="col-9 d-flex flex-column align-items-start justify-content-between">
            <span className="box-title d-block fw-light">{props.title}</span>
            <span className="box-number d-block fw-bold">{props.number}</span>
            <span className="box-evolution d-block fw-light">{props.evolution}% up from last week </span>
        </div>
        <div className="col-3">
            <img src={props.image} alt="" className="box-image ms-3" />

        </div>

    </div>;
}
export default AdminDashboard;
