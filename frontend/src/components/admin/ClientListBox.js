import React, { useState } from 'react';
import '../../App.css';
import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom';

function ClientListBox({ clientList }) {
    const [nameFilter, setNameFilter] = useState('');
    const [nifFilter, setNifFilter] = useState('');
    const [mailFilter, setMailFilter] = useState('');
    const [accountTypeFilter, setAccountTypeFilter] = useState('');

    // Filtering function
    const filteredRows = clientList.filter(row =>
        row[0].toLowerCase().includes(nameFilter.toLowerCase()) &&
        row[1].includes(nifFilter) &&
        row[2].toLowerCase().includes(mailFilter.toLowerCase()) &&
        row[3].toLowerCase().includes(accountTypeFilter.toLowerCase())
    );
    /* Futuro
        // Delete client function
        const deleteClient = (index) => {
            const updatedList = [...clientList];
            updatedList.splice(index, 1);
            setClientList(updatedList);
        };*/

    return (
        <div className="container bg-white px-0 roundbg shadow">
            <table className='table text-start'>
                <thead className='text-white'>
                    <tr>
                        <th className="ps-3 py-2">Name
                            <input
                                className="form-control w-75"
                                type="text"
                                placeholder="Search"
                                value={nameFilter}
                                onChange={(e) => setNameFilter(e.target.value)}
                            />
                        </th>
                        <th className="ps-3 py-2">NIF
                            <input
                                className="form-control w-75"
                                type="text"
                                placeholder="Search"
                                value={nifFilter}
                                onChange={(e) => setNifFilter(e.target.value)}
                            />
                        </th>
                        <th className="ps-3 py-2">Mail
                            <input
                                className="form-control w-75"
                                type="text"
                                placeholder="Search"
                                value={mailFilter}
                                onChange={(e) => setMailFilter(e.target.value)}
                            />
                        </th>
                        <th className="ps-3 py-2">Account Type
                            <input
                                className="form-control w-75"
                                type="text"
                                placeholder="Search"
                                value={accountTypeFilter}
                                onChange={(e) => setAccountTypeFilter(e.target.value)}
                            />
                        </th>
                        <th className="py-2 align-text-top text-center pt-2">Action</th>
                    </tr>
                </thead>
                <tbody className='text-start'>
                    {filteredRows.map((row, index) => (
                        <tr key={index}>
                            <td style={{ padding: '15px 0 15px 2%' }}>{row[0]}</td>
                            <td style={{ padding: '15px 0 15px 2%' }}>{row[1]}</td>
                            <td style={{ padding: '15px 0 15px 2%' }}>{row[2]}</td>
                            <td style={{ padding: '15px 0 15px 2%' }}>{row[3]}</td>
                            <td className="d-flex justify-content-center">
                                <Link to="/client" className="btn btn-outline-info me-2">
                                    See more
                                </Link>
                                <button className='btn btn-outline-danger'>
                                    Delete
                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default ClientListBox;