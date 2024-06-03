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


const BuyerManagerList = () => {
    return (
        <div className="dashboard-content w-100">
            <h2 className="title my-3">Managers</h2>
                    <ClientList />
        </div>

    );
}

function ClientList() {
    return <div className="col-12 rounded d-flex bg-white mx-auto">
        <div className="col-12 ">
            <table className='container-fluid text-start py-4 rounded'>
                <thead className='text-black'>
                    <th className="ps-3 py-2 col-2">Name</th>
                    <th className="ps-3 py-2 col-2">NIF</th>
                    <th className="ps-3 py-2 col-4">Mail</th>
                    <th className="ps-3 py-2 col-2">Account Type</th>
                    <th className="ps-3 py-2 col-2">Action</th>
                </thead>
                <tbody>
                    {rows.map((row, rowIndex) => (
                        <tr key={rowIndex} className='border-bottom'>
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
                            <td className='px-3'><button className='btn btn-outline-info me-2 hover'>Edit</button>
                            <button className='btn btn-outline-danger hover'>Delete</button></td>
                            
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    </div>
}


export default BuyerManagerList;
