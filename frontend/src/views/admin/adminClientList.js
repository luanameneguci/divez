import React from 'react';
import '../../App.css';

const list = [
    'Luana Meneguci', '123456789', 'luanameneguci@gmail.com', 'Client',
    'Luana Meneguci', '123456789', 'luanameneguci@gmail.com', 'Client',
    'Luana Meneguci', '123456789', 'luanameneguci@gmail.com', 'Client',
    'Luana Meneguci', '123456789', 'luanameneguci@gmail.com', 'Client',
    'Luana Meneguci', '123456789', 'luanameneguci@gmail.com', 'Client',
    'Luana Meneguci', '123456789', 'luanameneguci@gmail.com', 'Client',
];

// Split the box3content array into rows of 6 items each
const rows = [];
const itemsPerRow = 4;

for (let i = 0; i < list.length; i += itemsPerRow) {
    rows.push(list.slice(i, i + itemsPerRow));
}


const AdminClientList = () => {
    return (
        <div className="dashboard-content bg-light w-100">
            <h4 className="title my-2">Dashboard</h4>
                    <ClientList />
        </div>

    );
}

function ClientList() {
    return <div className="box-container col-auto rounded d-flex">
        <div className="col-12 bg-white">
            <table className='container-fluid text-start py-4 rounded  table3'>
                <thead className='text-black'>
                    <th className="ps-3 py-2">Name</th>
                    <th className="ps-3 py-2">NIF</th>
                    <th className="ps-3 py-2">Mail</th>
                    <th className="ps-3 py-2">Account Type</th>
                    <th className="ps-3 py-2">Action</th>
                </thead>
                <tbody className='bg-light'>
                    {rows.map((row, rowIndex) => (
                        <tr key={rowIndex}>
                            {row.map((data, colIndex) => (
                                <td
                                key={colIndex}
                                style={{ 
                                    color: colIndex === 5 ? '#FFD56D' : 'inherit',
                                    padding: '15px 0 15px 1%' 
                                }}
                            >
                                    {data}
                                </td>
                                
                            ))}
                            <td><button className='btn btn-outline-info me-2'>Edit</button>
                            <button className='btn btn-outline-danger'>Delete</button></td>
                            
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    </div>
}


export default AdminClientList;
