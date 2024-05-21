import React from 'react';
import '../../App.css';
import notificationicon from "../../images/notification.png";

const tablecontent = [
    1, 'Calls are not being received', '10.12.2024', 'Programing', 1, 'New',
    1, 'Calls are not being received', '10.12.2024', 'Programing', 1, 'New',
    1, 'Calls are not being received', '10.12.2024', 'Programing', 1, 'New',
    1, 'Calls are not being received', '10.12.2024', 'Programing', 1, 'New',
    1, 'Calls are not being received', '10.12.2024', 'Programing', 1, 'New',
    1, 'Calls are not being received', '10.12.2024', 'Programing', 1, 'New',
];

// Split the tablecontent array into rows of 6 items each
const rows = [];
const itemsPerRow = 6;

for (let i = 0; i < tablecontent.length; i += itemsPerRow) {
    rows.push(tablecontent.slice(i, i + itemsPerRow));
}

const AdminDashboard = () => {
    return (
        <div className="dashboard-content bg-dark w-100">
            <h4 className="title">Dashboard</h4>
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
                <div class="row">
                    <div class="col-4">
                        {/*Aqui vai ser o boxsecond*/}
                        <BoxThird />
                    </div>
                    <div class="col-8">
                        <BoxThird />
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
    return <div className="box-container bg-white col-auto rounded d-flex py-4 px-4">
        <div className="col-12 mainblue-bg">
            {/*Aqui vai ser o conteudo de cada um individual (tipo <adminDashboard />*/}
            <table className='container-fluid text-start '>
                <thead>
                    <th>Ticket Nº</th>
                    <th>Title</th>
                    <th>Date</th>
                    <th>Department</th>
                    <th>Priority</th>
                    <th>Status</th>
                </thead>
                <tbody className='bg-white'>
                    {rows.map((row, rowIndex) => (
                        <tr key={rowIndex}>
                            {row.map((data, colIndex) => (
                                <td key={colIndex}>{data}</td>
                            ))}
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    </div>
}

function adminTicketList() {
    return <div>

    </div>

}


export default AdminDashboard;
