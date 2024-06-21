import React from 'react';
import '../../App.css';
import 'react-datepicker/dist/react-datepicker.css';
import SalesListBox from '../../components/SalesListBox';


const AdminSalesList = () => {
    return (
        <div className="dashboard-content bg-light w-100">
            <h4 className="title my-2">Sales</h4>
            <div className="container">
                <div className="row my-4">
                    <SalesListBox />
                </div>
            </div>
        </div>
    );
}
export default AdminSalesList;
