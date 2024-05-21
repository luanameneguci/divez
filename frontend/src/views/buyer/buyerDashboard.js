import React from "react";
import "../../App.css";
import notificationicon from "../../images/notification.png";   


const tablecontent = [
    1, 'Name Aplication', 'New',
    2, 'Name Aplication', 'New',
    3, 'Name Aplication', 'New',
    4, 'Name Aplication', 'New',
    5, 'Name Aplication', 'New',
    6, 'Name Aplication', 'New',
];

// Split the tablecontent array into rows of 6 items each
const rows = [];
const itemsPerRow = 3;

for (let i = 0; i < 18; i += itemsPerRow) {
    rows.push(tablecontent.slice(i, i + itemsPerRow));
}

const AdminDashboard = () => {
  return (
    <div className="dashboard-content h-100 bg-light w-100">
            <h4 className="title px-4 py-3">Dashboard</h4>
            <div class="container text-center">
                <div class="row">
                    <div class="col">
                        <Box title="Pending budgets" number="20" image={notificationicon} evolution="10" />
                    </div>
                    <div class="col">
                        <Box title="Active Licenses" number="2000" image={notificationicon} evolution="10" />
                    </div>
                    <div class="col">
                        <Box title="Linked Users" number="200" image={notificationicon} evolution="10" />
                    </div>
                </div>
            </div>
            <div class="container text-center py-4">
            <div class="row">
                    <div class="col-4">
                        {/*Aqui vai ser o boxsecond*/}
                        <BoxSecond />
                    </div>
                    <div class="col-4">
                        {/*Aqui vai ser o boxsecond*/}
                        <BoxSecond />
                    </div>
                    <div class="col-4">
                        {/*Aqui vai ser o boxsecond*/}
                        <BoxSecond />
                    </div>
                </div>
            </div>
        </div>
  );
};

function Box(props) {
    return <div className="box-container bg-white col-auto rounded d-flex px-4 py-4">
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

function BoxSecond(props) {
    return <div className="box-container bg-white col-auto rounded d-flex">
        <div className="col-12">
            {/*Aqui vai ser o conteudo de cada um individual (tipo <adminDashboard />*/}
            <table className='container-fluid text-start mainblue-bg py-4 rounded'>
                <thead>
                    <th className="ps-3 py-2">Budget Nº</th>
                    <th className="ps-3 py-2">Budget title</th>
                    <th className="ps-3 py-2">Status</th>
                </thead>
                <tbody className='bg-white rounded'>
                    {rows.map((row, rowIndex) => (
                        <tr className="rounded" key={rowIndex}>
                            {row.map((data, colIndex) => (
                                <td className="ps-3 py-1" key={colIndex}>{data}</td>
                            ))}
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    </div>
}
export default AdminDashboard;
