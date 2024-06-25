import React, { useState, useEffect } from 'react';
import DatePicker from 'react-datepicker';
import { Link } from 'react-router-dom';
import 'react-datepicker/dist/react-datepicker.css';
import '../../App.css';
import { format } from 'date-fns';
import axios from 'axios';

function BudgetsListBox({ numRowsToShow }) {
    const [budgets, setBudgets] = useState([]);
    const [budgetNumberFilter, setBudgetNumberFilter] = useState('');
    const [clientFilter, setClientFilter] = useState('');
    const [statusFilter, setStatusFilter] = useState('');
    const [selectedDate, setSelectedDate] = useState(null);
    const [currentPage, setCurrentPage] = useState(1);
    const [itemsPerPage, setItemsPerPage] = useState(5);

    useEffect(() => {
        loadBudgets();
    }, []);

    const loadBudgets = async () => {
        try {
            const response = await axios.get('http://localhost:8080/budget');
            setBudgets(response.data);
        } catch (error) {
            console.error('Error fetching budgets:', error);
        }
    };

    const filteredRows = budgets.filter(row => {
        const rowDate = new Date(row.date);
        return (
            row.idBudget.toString().includes(budgetNumberFilter) &&
            (row.cart.buyer?.buyerName.toLowerCase().includes(clientFilter.toLowerCase()) || clientFilter === '') &&
            (!selectedDate || rowDate >= selectedDate) &&
            row.budgetStatus.budgetStatusDescript.toLowerCase().includes(statusFilter.toLowerCase())
        );
    });

    const getStatusColor = (status) => {
        switch (status) {
            case 'Pending':
                return '#2D9CDB'; // blue
            case 'Approved':
                return '#00B69B'; // green
            case 'Rejected':
                return '#EB5757'; // red
            case 'Completed':
                return '#6B7280'; // gray
            default:
                return 'inherit';
        }
    };

    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentItems = filteredRows.slice(indexOfFirstItem, indexOfLastItem);

    const paginate = (pageNumber) => setCurrentPage(pageNumber);

    const pageNumbers = [];
    for (let i = 1; i <= Math.ceil(filteredRows.length / itemsPerPage); i++) {
        pageNumbers.push(
            <li key={i} className={`page-item ${currentPage === i ? 'active' : ''}`}>
                <button className="page-link" onClick={() => paginate(i)}>{i}</button>
            </li>
        );
    }

    return (
        <div className="container bg-white d-flex px-0 roundbg h-100 shadow" style={{ minHeight: 405 + "px" }}>
            <div className="container px-0 roundbg h-100">
                <table className='table text-start'>
                    <thead className='text-white pt-2'>
                        <tr>
                            <th style={{ width: '10%' }}>Budget</th>
                            <th>Client</th>
                            <th>Date</th>
                            <th>Budget Description</th>
                            <th>Status</th>
                            <th className='text-center'>Action</th>
                        </tr>
                    </thead>
                    <tbody className='text-start'>
                        {currentItems.map((row, rowIndex) => (
                            <tr key={rowIndex}>
                                <td style={{ width: '10%' }} className='ps-3'>{row.idBudget}</td>
                                <td>{row.cart.buyer.buyerName}</td>
                                <td>{format(new Date(row.date), 'dd/MM/yyyy')}</td>
                                <td>{row.budgetDescript.slice(0, 30)}</td>
                                <td style={{ color: getStatusColor(row.budgetStatus.budgetStatusDescript) }}>{row.budgetStatus.budgetStatusDescript}</td>
                                <td className='text-center'>
                                    <Link to={"/budgetreply/" + row.idBudget} className='btn btn-outline-warning' onClick={() => console.log(row.idBudget)}>
                                        See more
                                    </Link>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
                {numRowsToShow === 20 && (
                    <nav aria-label="...">
                        <ul className="pagination justify-content-center">
                            {pageNumbers}
                        </ul>
                    </nav>
                )}
            </div>
        </div>
    );
}

export default BudgetsListBox;
