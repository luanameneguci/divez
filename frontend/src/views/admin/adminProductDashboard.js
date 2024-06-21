import React from 'react';
import '../../App.css';
import notificationicon from "../../images/notification.png";
import ProductGraph from '../../components/ProductGraph';
import Box from '../../components/Box';
import LastSalesBox from '../../components/LastSalesBox';

const AdminProductDashboard = () => {
    return (
        <div className="container bg-light w-100">
            <h4 className="title my-2">Product Name</h4>
            <div className="container text-center">
                <div className="d-flex justify-content-between">
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
                <div className="container my-4">
                    <div className="col-12 bg-white roundbg my-2">
                        <h2>Sales</h2>
                        <ProductGraph title="Sales over the Year" />
                    </div>
                    <div className="d-flex flex-column bg-white w-100 roundbg mt-3 p-0">
                        <h2 className="my-2">Last Sales</h2>
                        <div className="text-center">
                            <div className="row my-4 rounded">
                                <LastSalesBox />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}


export default AdminProductDashboard;
