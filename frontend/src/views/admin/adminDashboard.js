import React from 'react';
import '../../App.css';
import notificationicon from "../../images/notification.png";
import Box from '../../components/admin/Box';
import TicketListBox from '../../components/admin/TicketListBox';
import BoxProgress from '../../components/admin/ProgressBox';
import BudgetListBox from '../../components/admin/BudgetListBox';

var numRowsToShow = 6;

const AdminDashboard = () => {
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
                <div class="row my-3">
                    <div class="col-4">
                        {/*Size fixed*/}
                        <BoxProgress />

                    </div>
                    <div class="col-8">
                        {/*Underneat the last row, has a extra row?*/}
                        <TicketListBox numRowsToShow={numRowsToShow}/>
                    </div>
                </div>
                <div class="row my-3">
                    <div class="col-4">
                        {/*Pie chart*/}

                    </div>
                    <div class="col-8">
                        <BudgetListBox numRowsToShow={numRowsToShow}/>
                    </div>
                </div>
            </div>
        </div >

    );
}

export default AdminDashboard;
