import React, { useState } from 'react';
import '../../App.css';

const list = [
    'Luana Meneguci', '123456789', 'luanameneguci@gmail.com', 'Client',
    'Luana Meneguci', '123456789', 'luanameneguci@gmail.com', 'Client',
    'Luana Meneguci', '123456789', 'luanameneguci@gmail.com', 'Client',
    'Luana Meneguci', '123456789', 'luanameneguci@gmail.com', 'Client',
    'Luana Meneguci', '123456789', 'luanameneguci@gmail.com', 'Client',
    'Luana Meneguci', '321321321', 'luanameneguci@gmail.com', 'Client',
];

// Split the list array into rows of 4 items each
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
    const [name, setName] = useState('');
    const [nif, setNif] = useState('');
    const [mail, setMail] = useState('');
    const [accountType, setAccountType] = useState('');

    const handleNameChange = (e) => setName(e.target.value);
    const handleNifChange = (e) => setNif(e.target.value);
    const handleMailChange = (e) => setMail(e.target.value);
    const handleAccountTypeChange = (e) => setAccountType(e.target.value);

    const filteredRows = rows.filter(row => {
        return (
            (!name || row[0].toLowerCase().includes(name.toLowerCase())) &&
            (!nif || row[1].toLowerCase().includes(nif.toLowerCase())) &&
            (!mail || row[2].toLowerCase().includes(mail.toLowerCase())) &&
            (!accountType || row[3].toLowerCase().includes(accountType.toLowerCase()))
        );
    });

    return (
        <div className="box-container col-auto rounded d-flex">
            <div className="col-12 bg-white border border-product">
                <table className='table container-fluid py-4 border border-light'>
                    <thead className='text-white'>
                        <tr>
                            <th className="ps-3 py-2">Name
                                <input
                                    className="form-control w-75"
                                    type="text"
                                    placeholder="Search"
                                    value={name}
                                    onChange={handleNameChange}
                                />
                            </th>
                            <th className="ps-3 py-2">NIF
                                <input
                                    className="form-control w-75"
                                    type="text"
                                    placeholder="Search"
                                    value={nif}
                                    onChange={handleNifChange}
                                />
                            </th>
                            <th className="ps-3 py-2">Mail
                                <input
                                    className="form-control w-75"
                                    type="text"
                                    placeholder="Search"
                                    value={mail}
                                    onChange={handleMailChange}
                                />
                            </th>
                            <th className="ps-3 py-2">Account Type
                                <input
                                    className="form-control w-75"
                                    type="text"
                                    placeholder="Search"
                                    value={accountType}
                                    onChange={handleAccountTypeChange}
                                />
                            </th>
                            <th className="py-2 align-text-top text-center pt-2">Action</th>
                        </tr>
                    </thead>
                    <tbody className='bg-light'>
                        {filteredRows.map((row, rowIndex) => (
                            <tr key={rowIndex}>
                                {row.map((data, colIndex) => (
                                    <td
                                        key={colIndex}
                                        style={{ 
                                            color: colIndex === 5 ? '#FFD56D' : 'inherit',
                                            padding: '15px 0 15px 2%' 
                                        }}
                                    >
                                        {data}
                                    </td>
                                ))}
                                <td className="d-flex justify-content-center">
                                    <button className='btn btn-outline-info me-2'>Edit</button>
                                    <button className='btn btn-outline-danger'>Delete</button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}

export default AdminClientList;
