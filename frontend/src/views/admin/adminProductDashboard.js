import React from 'react';
import '../../App.css';
import notificationicon from "../../images/notification.png";
import { Chart, LineController, LineElement, PointElement, LinearScale, Title, CategoryScale } from 'chart.js';
import ProductGraph from '../../ProductGraph';

const boxProductsContent = [
    notificationicon, 'Adobe Photoshop', '69', '20/10/2024', '1000', 'Updated',
    notificationicon, 'Adobe Photoshop', '69', '20/10/2024', '1000', 'Outdated',
    notificationicon, 'Adobe Photoshop', '69', '20/10/2024', '1000', 'Updated',
    notificationicon, 'Adobe Photoshop', '69', '20/10/2024', '1000', 'Outdated',
    notificationicon, 'Adobe Photoshop', '69', '20/10/2024', '1000', 'Updated',
];

// Split the boxProductsContent array into rows of 3 items each
const rows3 = [];
const itemsPerRow = 6;

for (let i = 0; i < boxProductsContent.length; i += itemsPerRow) {
    rows3.push(boxProductsContent.slice(i, i + itemsPerRow));
}

const boxBudgetsContent = [
    1, 'Basic Adobe Apps', 'New',
    1, 'Basic Adobe Apps', 'Paid',
    1, 'Basic Adobe Apps', 'Rejected',
    1, 'Basic Adobe Apps', 'Waiting',
    1, 'Basic Adobe Apps', 'New',
    1, 'Basic Adobe Apps', 'New',
    1, 'Basic Adobe Apps', 'New',
    1, 'Basic Adobe Apps', 'New',
    1, 'Basic Adobe Apps', 'New',
];

// Split the boxBudgetsContent array into rows of 3 items each
const rows4 = [];
const itemsPerRow4 = 3;

for (let i = 0; i < boxBudgetsContent.length; i += itemsPerRow4) {
    rows4.push(boxBudgetsContent.slice(i, i + itemsPerRow4));
}

const AdminProductDashboard = () => {
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
                <div className="row my-4">
                    <div className="col-12 bg-white roundbg my-2">
                        <h2>Sales</h2>
                        <ProductGraph />
                    </div>
                    <div className="col-12 bg-white roundbg my-2">
                        <LastSalesBox />
                    </div>
                </div>
            </div>
        </div>
    );
}

function Box(props) {
    return (
        <div className="box-container bg-white col-auto rounded d-flex px-4 py-4 admin-box-maxw">
            <div className="col-10">
                <span className="box-title d-flex justify-content-start"><strong><h6>{props.title}</h6></strong></span>
                <span className="box-number d-flex justify-content-start pt-2"><strong><h2>{props.number}</h2></strong></span>
            </div>
            <div>
                <img src={props.image} alt="" className="box-image ms-3" />
            </div>
        </div>
    );
}

function LastSalesBox() {
    return (
        <div className="box-container bg-white roundbg d-flex h-100">
            <div className="col-12">
                <h2 className='text-start p-2'>Products</h2>
                <table className='container text-start'>
                    <thead className='text-white mainblue-bg'>
                        <tr>
                            <th className="ps-4 py-2" colSpan={2}>Product Name</th>
                            <th className="ps-4 py-2">Client ID</th>
                            <th className="ps-4 py-2">Date</th>
                            <th className="ps-4 py-2">Amount</th>
                            <th className="ps-4 py-2">Status</th>
                        </tr>
                    </thead>
                    <tbody>
                        {rows3.map((row, rowIndex) => (
                            <tr key={rowIndex}>
                                {row.map((data, colIndex) => {
                                    let spanStyle = {};
                                    if (colIndex === row.length - 1) { // Check if it's the last column
                                        spanStyle.textAlign = 'center';
                                        if (data === 'Updated') {
                                            spanStyle.backgroundColor = '#00B69B';
                                            spanStyle.color = '#fff';
                                            spanStyle.borderRadius = '20px';
                                            spanStyle.fontWeight = '500';
                                        } else if (data === 'Outdated') {
                                            spanStyle.textAlign = 'center';
                                            spanStyle.backgroundColor = '#FD5454';
                                            spanStyle.color = '#fff';
                                            spanStyle.borderRadius = '20px';
                                            spanStyle.fontWeight = '500';
                                        }
                                    }
                                    if (colIndex === 0) {
                                        return (
                                            < td key={colIndex}
                                            className='listimage py-3 ps-2'
                                            
                                                colSpan={(colIndex === 0) ? 1 : 0}>
                                                <img src={notificationicon}></img>
                                            </td>
                                        )
                                    } else {
                                        return (
                                            <td
                                                key={colIndex}
                                                colSpan={(colIndex === 0) ? 1 : 0}
                                                style={{
                                                    padding: '10px',
                                                }}
                                            >
                                                <span style={{ ...spanStyle, padding: '4px 15px', display: 'inline-block' }}>
                                                    {data}
                                                </span>
                                            </td>
                                        );
                                    }

                                })}
                            </tr>
                        ))}
                    </tbody>
                </table>
                <div className="mt-2">
                    <button className='btn btn-outline-dark'>See more</button>
                </div>
            </div>
        </div >
    );
}
export default AdminProductDashboard;
