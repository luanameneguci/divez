import React, { useState } from 'react';
import '../../App.css';
import BudgetListBox from '../../components/BudgetListBox';

const AdminBudgetList = () => {
    return (
        <div className="dashboard-content bg-light w-100">
            <h4 className="title my-2">Budgets</h4>
            <div className="container text-center">
                <div className="row my-4">
                    <div className="col-12">
                        <BudgetListBox />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default AdminBudgetList;
