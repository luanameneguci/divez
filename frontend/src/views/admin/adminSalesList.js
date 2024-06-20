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

function Box(props) {
    return (
        <div className="box-container bg-white col-auto rounded d-flex px-4 py-4 shadow">
            <div className="col-10">
                <span className="box-title d-flex justify-content-start">
                    <strong>
                        <h6>{props.title}</h6>
                    </strong>
                </span>
                <span className="box-number d-flex justify-content-start pt-2">
                    <strong>
                        <h2>{props.number}</h2>
                    </strong>
                </span>
            </div>
        </div>
    );
}

export default AdminSalesList;
