import React from 'react';
import '../../App.css';
import notificationicon from "../../images/notification.png";

const AdminDashboard = () => {
    return (
        <div className="dashboard-content h-100 bg-light w-100">
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
    return <div className="box-container bg-white col-auto rounded">
        <span className="box-title d-block">{props.title}</span>
        <span className="box-number d-block">{props.number}</span>
        <img src={props.image} alt="" className="box-image ms-3" />
        <span className="box-evolution d-block">{props.evolution}% </span>
    </div>;
}
export default AdminDashboard;