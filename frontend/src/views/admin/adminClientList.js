import React, { useState } from 'react';
import '../../App.css';
import ClientListBox from '../../components/ClientListBox';

const AdminBudgetList = () => {
    return (
        <div className="container bg-light w-100">
            <h4 className="title my-2">Clients</h4>
            <div className="container text-center">
                <div className="row my-4">
                    <div className="col-12">
                        <ClientListBox />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default AdminBudgetList;
