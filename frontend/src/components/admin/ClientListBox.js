import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios'; // Import axios for making HTTP requests

function ClientListBox({ clientList }) {
    const [nameFilter, setNameFilter] = useState('');
    const [nifFilter, setNifFilter] = useState('');
    const [mailFilter, setMailFilter] = useState('');
    const [accountTypeFilter, setAccountTypeFilter] = useState('');
    const [currentPage, setCurrentPage] = useState(1);
    const [itemsPerPage] = useState(5);

    const filteredRows = clientList.filter(row =>
        row[0].toLowerCase().includes(nameFilter.toLowerCase()) &&
        row[1].includes(nifFilter) &&
        row[2].toLowerCase().includes(mailFilter.toLowerCase()) &&
        row[3].toLowerCase().includes(accountTypeFilter.toLowerCase())
    );

    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentItems = filteredRows.slice(indexOfFirstItem, indexOfLastItem);

    const paginate = (pageNumber) => setCurrentPage(pageNumber);

    /*const handleDelete = async (clientList, accountType, rowIndex) => {
        const id = clientList[rowIndex][4]; // Assuming id is stored at index 4 in each row

        const endpoint = accountType === 'Manager'
            ? `http://localhost:8080/manager/delete/${id}`
            : `http://localhost:8080/buyer/delete/${id}`;

        axios.post(endpoint)
            .then(response => {
                if (response.data.message === "Deleted Successfully!") {
                    Swal.fire(
                        'Deleted!',
                        'Your client has been deleted.',
                        'success'
                    );
                } else {
                    Swal.fire(
                        'Error!',
                        'Failed to delete client.',
                        'error'
                    );
                }
            })
            .catch(error => {
                Swal.fire(
                    'Error!',
                    'Failed to delete client. Please try again later.',
                    'error'
                );
            });
    };

    function OnDelete(clientList, accountType, rowIndex) {
        Swal.fire({
            title: 'Are you sure?',
            text: 'You will not be able to reverse this action',
            icon: 'warning',
            showCancelButton: true,
            confirmButtonText: 'Yes, delete it!',
            cancelButtonText: 'No, keep it'
        }).then((result) => {
            if (result.isConfirmed) {
                handleDelete(clientList, accountType, rowIndex); // Pass correct parameters here
            } else if (result.dismiss === Swal.DismissReason.cancel) {
                Swal.fire(
                    'Cancelled',
                    'Client was not deleted',
                    'error'
                );
            }
        });
    }*/
    

    const pageNumbers = [];
    for (let i = 1; i <= Math.ceil(filteredRows.length / itemsPerPage); i++) {
        pageNumbers.push(
            <li key={i} className={`page-item ${currentPage === i ? 'active' : ''}`}>
                <button onClick={() => paginate(i)} className="page-link">{i}</button>
            </li>
        );
    }

    return (
        <div className="container bg-white px-0 roundbg shadow h-100">
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
                    {currentItems.map((row, index) => (
                        <tr key={index}>
                            <td style={{ padding: '15px 0 15px 2%' }}>{row[0]}</td>
                            <td style={{ padding: '15px 0 15px 2%' }}>{row[1]}</td>
                            <td style={{ padding: '15px 0 15px 2%' }}>{row[2]}</td>
                            <td style={{ padding: '15px 0 15px 2%' }}>{row[3]}</td>
                            <td className="d-flex justify-content-center">
                                <Link to="/client" className="btn btn-outline-info me-2">
                                    See more
                                </Link>
                                <button className='btn btn-outline-danger' /*onClick={() => OnDelete(clientList, row[3], indexOfFirstItem + index)}*/>
                                    Delete
                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
            <nav aria-label="...">
                <ul className="pagination pb-2 justify-content-center">
                    {pageNumbers}
                </ul>
            </nav>
        </div>
    );
}

export default ClientListBox;
