import React from 'react';
import '../../App.css';
import notificationicon from "../../images/notification.png";
import Box from '../../components/Box';
import TicketListBox from '../../components/TicketListBox';
import BoxProgress from '../../components/ProgressBox';
import BudgetListBox from '../../components/BudgetListBox';

var numRowsToShow = 6;

const AdminDashboard = () => {
    return (
        <div className="dashboard-content bg-light w-100">
            <h4 className="title my-2">Product Name</h4>
            <div className="container text-center">
                <div className="row d-flex justify-content-between">
                    <div className="col mx-1 bg-white roundbg">
                        <Box title="Pending tickets" number="20" image={notificationicon} evolution="10" />
                    </div>
                    <div className="col mx-1 bg-white roundbg">
                        <Box title="Pending Sales" number="20" image={notificationicon} evolution="10" />
                    </div>
                    <div className="col mx-1 bg-white roundbg">
                        <Box title="Inactive Licences" number="20" image={notificationicon} evolution="10" />
                    </div>
                    <div className="col mx-1 bg-white roundbg">
                        <Box title="Active Licences" number="20" image={notificationicon} evolution="10" />
                    </div>
                </div>
                <div class="row my-3">
                    <div class="col-4">
                        <BoxProgress />

                    </div>
                    <div class="col-8">
                        <TicketListBox numRowsToShow={numRowsToShow} showSearchInputs={false}/>
                    </div>
                </div>
                <div class="row my-3">
                    <div class="col-4">
                        {/*Aqui vai ser o boxsecond*/}

                    </div>
                    <div class="col-8">
                        <BudgetListBox />
                    </div>
                </div>
            </div>
        </div >

    );
}





export default AdminDashboard;
