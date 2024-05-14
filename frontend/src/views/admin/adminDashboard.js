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