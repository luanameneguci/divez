import React from 'react';
import '../../App.css';
import notificationicon from "../../images/notification.png";

const boxProductsContent = [
    'Adobe Photoshop', '1000', 'Updated',
    'IntelliJ IDEA', '250', 'Outdated',
    'Adobe Photoshop', '30000', 'Updated',
    'Visual Studio Code', '3500', 'Outdated',
    'Visual Studio Code', '3500', 'Outdated',



];

// Split the box3content array into rows of 6 items each
const rows3 = [];
const itemsPerRow = 3;

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

// Split the box4content array into rows of 3 items each
const rows4 = [];
const itemsPerRow4 = 3;

for (let i = 0; i < boxBudgetsContent.length; i += itemsPerRow4) {
    rows4.push(boxBudgetsContent.slice(i, i + itemsPerRow4));
}

const AdminClientDashboard = () => {
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
                <div className="row my-6 my-4 rounded">
                    <div className="col-6 roundbg">
                        <ClientProductsBox />
                    </div>
                    <div className="col-6 roundbg">
                        <ClientBudgetsBox />
                    </div>
                </div>
            </div>
        </div>
    );
}

function Box(props) {
    return (
        <div className="box-container bg-white col-auto roundbg d-flex px-4 py-4 admin-box-maxw">
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

function ClientProductsBox() {
    return (
        <div className="box-container bg-white roundbg d-flex h-100">
            <div className="col-12">
                <h3 className='text-start p-3'>Products</h3>
                <table className='container text-start'>
                    <thead className='text-white mainblue-bg'>
                        <tr>
                            <th className="ps-4 py-2">Product Name</th>
                            <th className="ps-4 py-2">Licences</th>
                            <th className="ps- py-2">Status</th>
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
                                        }
                                        else if (data === 'Outdated') {
                                            spanStyle.textAlign = 'center';
                                            spanStyle.backgroundColor = '#FD5454';
                                            spanStyle.color = '#fff';
                                            spanStyle.borderRadius = '20px';
                                            spanStyle.fontWeight = '500';
                                        }
                                    }
                                    return (
                                        <td
                                            key={colIndex}
                                            style={{
                                                padding: '10px 10px',
                                            }}
                                        >
                                            <span style={{ ...spanStyle, padding: '4px 15px', display: 'inline-block' }}>
                                                {data}
                                            </span>
                                        </td>
                                    );
                                })}
                            </tr>
                        ))}
                    </tbody>
                </table>
                <div className="mt-2"> {/*Não consigo por esta porcaria bottom 0*/}
                    <button className='btn btn-outline-dark'>See more</button>
                </div>
            </div>
        </div>
    );
}



function ClientBudgetsBox() {
    return (
        <div className="box-container bg-white roundbg d-flex h-100">
            <div className="col-12">
                <h3 className='text-start p-3'>Budgets</h3>

                <table className='container-fluid text-start py-4'>
                    <thead className='text-white mainblue-bg'>
                        <tr>
                            <th className="ps-2 py-2">Budget Nº</th>
                            <th className="ps-3 py-2">Client</th>
                            <th className="ps-3 py-2">Status</th>
                        </tr>
                    </thead>
                    <tbody>
                        {rows4.map((row, rowIndex) => (
                            <tr key={rowIndex}>
                                {row.map((data, colIndex) => {
                                    let color = 'inherit';
                                    if (colIndex === 2) { // Check the value in the last column
                                        if (data === 'New') color = '#FFD56D'; //amarelo
                                        else if (data === 'Rejected') color = '#EB5757'; // vermelho
                                        else if (data === 'Paid') color = '#00B69B'; // verde
                                        else if (data === 'Waiting') color = '#2D9CDB'; //azul
                                    }
                                    return (
                                        <td
                                            key={colIndex}
                                            style={{
                                                color: color,
                                                padding: '10px 3%',
                                                width: '33.33%'
                                            }}
                                        >
                                            {data}
                                        </td>
                                    );
                                })}
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}


export default AdminClientDashboard;
