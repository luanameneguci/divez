import React from 'react';
import '../../App.css';
import { Doughnut } from "react-chartjs-2";
import { Chart, ArcElement, Tooltip, Legend } from 'chart.js';

import notificationicon from "../../images/notification.png";
import Box from '../../components/admin/Box';
import TicketListBox from '../../components/admin/TicketListBox';
import BoxProgress from '../../components/admin/ProgressBox';
import BudgetListBox from '../../components/admin/BudgetListBox';

Chart.register(ArcElement, Tooltip, Legend);

const numRowsToShow = 6;

const AdminDashboard = () => {
    const donutdata = {
        labels: ["New", "Rejected", "Paid", "Waiting"],
        datasets: [
            {
                data: [2, 5, 6, 7], // aqui vai ser os dados dos bilhetes trazidos da db
                backgroundColor: ['#FFD56D', '#EB5757', '#00B69B', '#2D9CDB'],
            }
        ]
    }

    return (
        <div className="container bg-light w-100">
            <h3 className="title my-2 mx-4">Dashboard</h3>
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
                <div className="row my-3">
                    <div className="col-4">
                        <BoxProgress />
                    </div>
                    <div className="col-8">
                        <TicketListBox numRowsToShow={numRowsToShow} />
                    </div>
                </div>
                <div className="row my-3">
                    <div className="col-4">
                        <div className="box-container bg-white col-auto roundbg d-flex shadow pb-3 shadow h-100">
                            <div className="col-12">
                                <span className="box-title d-flex justify-content-start pt-3 ps-3 pb-3">
                                    <strong>
                                        <h4>Budgets</h4>
                                    </strong>
                                </span>
                                <div className="px-3">
                                    <Doughnut data={donutdata} style={{ height: '300px' }} />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-8">
                        <BudgetListBox numRowsToShow={numRowsToShow} />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default AdminDashboard;
