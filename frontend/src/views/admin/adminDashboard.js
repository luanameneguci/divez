import React from 'react';
import '../../App.css';
import notificationicon from "../../images/notification.png";

const box3content = [
    1, 'Calls are not being received', '10.12.2024', 'Programing', 1, 'New',
    1, 'Calls are not being received', '10.12.2024', 'Programing', 1, 'New',
    1, 'Calls are not being received', '10.12.2024', 'Programing', 1, 'New',
    1, 'Calls are not being received', '10.12.2024', 'Programing', 1, 'New',
    1, 'Calls are not being received', '10.12.2024', 'Programing', 1, 'New',
    1, 'Calls are not being received', '10.12.2024', 'Programing', 1, 'New',
];

// Split the box3content array into rows of 6 items each
const rows3 = [];
const itemsPerRow = 6;

for (let i = 0; i < box3content.length; i += itemsPerRow) {
    rows3.push(box3content.slice(i, i + itemsPerRow));
}

const box4content = [
    1, 'João Ratão', 20000+"€",'New',
    1, 'João Ratão', 20000+"€",'New',
    1, 'João Ratão', 20000+"€",'New',
    1, 'João Ratão', 20000+"€",'New',
    1, 'João Ratão', 20000+"€",'New',
    1, 'João Ratão', 20000+"€",'New',
];

// Split the box3content array into rows of 6 items each
const rows4 = [];
const itemsPerRow4 = 4;

for (let i = 0; i < box4content.length; i += itemsPerRow4) {
    rows4.push(box4content.slice(i, i + itemsPerRow4));
}


const AdminDashboard = () => {
    return (
        <div className="dashboard-content bg-light w-100">
            <h4 className="title my-2">Dashboard</h4>
            <div class="container text-center">
                <div class="row">
                    <div class="col">
                        <Box title="Pending tickets" number="20" image={notificationicon} evolution="10" />
                    </div>
                    <div class="col">
                        <Box title="Pending tickets" number="20" image={notificationicon} evolution="10" />
                    </div>
                    <div class="col">
                        <Box title="Pending tickets" number="20" image={notificationicon} evolution="10" />
                    </div>
                    <div class="col">
                        <Box title="Pending tickets" number="20" image={notificationicon} evolution="10" />
                    </div>
                </div>
                <div class="row my-3">
                    <div class="col-4">
                        {/*Aqui vai ser o boxsecond*/}

                    </div>
                    <div class="col-8">
                        <BoxThird />
                    </div>
                </div>
                <div class="row my-3">
                    <div class="col-4">
                        {/*Aqui vai ser o boxsecond*/}

                    </div>
                    <div class="col-8">
                        <BoxFourth />
                    </div>
                </div>
            </div>
        </div>

    );
}

function Box(props) {
    return <div className="box-container bg-white col-auto rounded d-flex px-4 py-4 admin-box-maxw">
        <div className="col-10">
            <span className="box-title d-flex justify-content-start"><strong><h6>{props.title}</h6></strong></span>
            <span className="box-number d-flex justify-content-start pt-2"><strong><h2>{props.number}</h2></strong></span>
            <span className="box-evolution d-flex justify-content-bottom pt-2">{props.evolution}% more than yesterday </span>
        </div>
        <div>
            <img src={props.image} alt="" className="box-image ms-3" />
        </div>
    </div>;
}

function BoxThird() {
    return <div className="box-container bg-white col-auto rounded d-flex">
        <div className="col-12 mainblue-bg">
            {/*Aqui vai ser o conteudo de cada um individual (tipo <adminDashboard />*/}
            <table className='container-fluid text-start mainblue-bg py-4 rounded table3'>
                <thead className='text-white'>
                    <th className="ps-3 py-2">Ticket Nº</th>
                    <th className="ps-3 py-2">Title</th>
                    <th className="ps-3 py-2">Date</th>
                    <th className="ps-3 py-2">Department</th>
                    <th className="ps-3 py-2">Priority</th>
                    <th className="ps-3 py-2">Status</th>
                </thead>
                <tbody className='bg-white'>
                {rows3.map((row, rowIndex) => (
                        <tr key={rowIndex}>
                            {row.map((data, colIndex) => (
                               <td
                               key={colIndex}
                               style={{ 
                                   color: colIndex === 5 ? '#FFD56D' : 'inherit',
                                   padding: '10px 0 10px 1%' 
                               }}
                           >
                                {data}
                              </td>
                            ))}
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    </div>
}

function BoxFourth() {
    return <div className="box-container bg-white col-auto rounded d-flex">
        <div className="col-12 mainblue-bg">
            {/*Aqui vai ser o conteudo de cada um individual (tipo <adminDashboard />*/}
            <table className='container-fluid text-start mainblue-bg py-4 rounded table3'>
                <thead className='text-white'>
                    <th className="ps-3 py-2">Budget Nº</th>
                    <th className="ps-3 py-2">Client</th>
                    <th className="ps-3 py-2">Amount</th>
                    <th className="ps-3 py-2">Status</th>
                </thead>
                <tbody className='bg-white'>
                    {rows4.map((row, rowIndex) => (
                        <tr key={rowIndex}>
                            {row.map((data, colIndex) => (
                                <td
                                key={colIndex}
                                style={{ 
                                    color: colIndex === 3 ? '#FFD56D' : 'inherit',
                                    padding: '10px 0 10px 1%' 
                                }}
                            >
                                {data}
                              </td>
                            ))}
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    </div>
}


export default AdminDashboard;
