import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import '../../App.css';

const AdminBudgetReply = () => {
    const { idBudget } = useParams();
    const [budget, setBudget] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);
    const [reply, setReply] = useState('');
    const [statusOptions, setStatusOptions] = useState([]);
    const [selectedStatus, setSelectedStatus] = useState('');
    const [status, setStatus] = useState();

    useEffect(() => {
        const loadBudget = async () => {
            try {
                const response = await axios.get(`http://localhost:8080/budget/${idBudget}`);
                setBudget(response.data);
                setIsLoading(false);
            } catch (error) {
                console.error('Error fetching budget:', error);
                setError(error);
                setIsLoading(false);
            }
        };

        loadBudget();
    }, [idBudget]);

    useEffect(() => {
        const loadBudgetStatus = async () => {
            try {
                const response = await axios.get('http://localhost:8080/budgetstatus');
                setStatusOptions(response.data);
            } catch (error) {
                console.error('Error fetching budget status:', error);
                setError(error);
            }
        };

        loadBudgetStatus();
    }, []);

    const handleSaveReply = async () => {
        try {
            const response = await axios.post(`http://localhost:8080/budget/${idBudget}/reply`, {
                replyContent: reply,
            });
            console.log('Reply saved:', response.data);
            // Optionally update local state or UI after successful save
        } catch (error) {
            console.error('Error saving reply:', error);
            // Handle error (e.g., show error message to user)
        }
    };

    const handleUpdateStatus = async () => {
        try {
            const response = await axios.put(`http://localhost:8080/budget/update/${idBudget}`, {
                idBudgetStatus: selectedStatus,
            });
            console.log('Budget status updated:', response.data);
            // Optionally update local state or UI after successful status update
        } catch (error) {
            console.error('Error updating budget status:', error);
            // Handle error (e.g., show error message to user)
        }
    };

    if (isLoading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>Error loading budget: {error.message}</div>;
    }

    return (
        <div className="container bg-light w-100 p-2x">
            <div className="container">
                <div className="box-container bg-white roundbg h-100 p-4 shadow">
                    <div className="row border-bottom">
                        <h4 className='text-start'>Budget #{budget.idBudget}</h4>
                        <p className='text-start'>Items:</p>
                    </div>
                    {budget.cart && (
                        <div className="row m-2 border-bottom">
                            <div className='col-5'>
                                <p><strong>Product</strong></p>
                            </div>
                            <div className='col-3'>
                                <p><strong>Amount</strong></p>
                            </div>
                        </div>
                    )}
                    <div className="col-12">
                        {budget.cart && (
                            <div className="row border-bottom m-2">
                                <div className="d-flex align-items-center">
                                    <span className='fw-semibold col-4'>Cart Price: {budget.cart.cartPrice}</span>
                                    <span className='col-5 ms-4'><strong>License Number: {budget.cart.licenseNumber}</strong></span>
                                </div>
                            </div>
                        )}
                    </div>
                    <div className='row mt-3'>
                        <h6 className='text-start'>Description</h6>
                        <div className='row'>
                            <span>{budget.budgetDescript}</span>
                        </div>
                    </div>
                    <form className='row d-flex mt-4'>
                        <div className=" mb-3 col-8">
                            <label htmlFor="descriptioninput">Reply</label>
                            <textarea
                                className="form-control"
                                id="descriptioninput"
                                rows="3"
                                maxLength="250"
                                value={reply}
                                onChange={(e) => setReply(e.target.value)}
                            ></textarea>
                        </div>
                        <div className=" mb-3 col">
                            <label htmlFor="statusSelect">Status</label>
                            <select
                                id="statusSelect"
                                className="form-select"
                                value={selectedStatus} // Use selectedStatus here, not status
                                onChange={(e) => setSelectedStatus(e.target.value)} // Update setSelectedStatus, not setStatus
                            >
                                <option value="">Select Status</option>
                                {statusOptions.map(stat => (
                                    <option key={stat.idBudgetStatus} value={stat.idBudgetStatus.toString()}>{stat.budgetStatusDescript}</option>
                                ))}
                            </select> 
                            <div className="row d-flex mt-3 justify-content-end">
                                <div className="col-4">
                                    <button type="button" className="btn btn-success hover shadow col-12" onClick={handleSaveReply}>Save Reply</button>
                                </div>
                                <div className="col-4">
                                    <button type="button" className="btn btn-info text-white hover shadow col-12">Send Reply</button>
                                </div>
                                <div className="col-4">
                                    <button type="button" className="btn btn-danger hover shadow col-12" onClick={handleUpdateStatus}>Refuse</button>
                                </div>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default AdminBudgetReply;
