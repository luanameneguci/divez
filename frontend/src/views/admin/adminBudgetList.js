import React, { useState } from 'react';
import '../../App.css';
import BudgetListBox from '../../components/BudgetListBox';

// defines the number of rows that will appear on the table
const numRowsToShow = 20;

const AdminBudgetList = () => {
    return (
        <div className="container bg-light w-100">
            <h4 className="title my-2">Budgets</h4>
            <div className="container text-center">
                <div className="row my-4">
                    <div className="col-12">
                        <BudgetListBox numRowsToShow={numRowsToShow}/>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default AdminBudgetList;
