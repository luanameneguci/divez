import React from 'react';
import '../../App.css';
import notificationicon from "../../images/notification.png";
import TicketListBox from '../../components/TicketListBox';
import Box from '../../components/Box';

var numRowsToShow = 20;


const AdminTicketList = () => {
    return (
        <div className="dashboard-content bg-light w-100">
            <h4 className="title my-2">Tickets</h4>
            <div className="container text-center">
                <div className="row d-flex justify-content-between">
                    <div className="col mx-1 bg-white roundbg">
                        <Box title="Total Tickets" number="20" image={notificationicon} />
                    </div>
                    <div className="col mx-1 bg-white roundbg">
                        <Box title="Tickets Solved" number="20" image={notificationicon} />
                    </div>
                    <div className="col mx-1 bg-white roundbg">
                        <Box title="To Solve" number="20" image={notificationicon} />
                    </div>
                </div>
                <div className="row my-4 rounded">
                <TicketListBox numRowsToShow={numRowsToShow} showSearchInputs={true}/>
                </div>
            </div>
        </div>
    );
}

export default AdminTicketList;