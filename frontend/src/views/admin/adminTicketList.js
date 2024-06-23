import React from 'react';
import '../../App.css';
import TicketListBox from '../../components/admin/TicketListBox';

var numRowsToShow = 20;


const AdminTicketList = () => {
    return (
        <div className="dashboard-content bg-s w-100">
            <h4 className="title my-2">Tickets</h4>
            <div className="container text-center">
                <div className="row my-4">
                <TicketListBox numRowsToShow={numRowsToShow} showSearchInputs={true}/>
                </div>
            </div>
        </div>
    );
}

export default AdminTicketList;