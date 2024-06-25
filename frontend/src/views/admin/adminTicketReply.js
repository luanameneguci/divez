import React, { useState } from 'react';
import '../../App.css';

const ticketsList = [
    {
        client: "Johnny Mousão",
        img: "https://img.icons8.com/?size=100&id=FK8AfMKCrwOU&format=png&color=000000",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas sed elit sodales, convallis purus at, pellentesque purus. Mauris at nunc.",
        date: "19/06/2024"
    },
    {
        client: "Johnny Mousão",
        img: "https://img.icons8.com/?size=100&id=FK8AfMKCrwOU&format=png&color=000000",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas sed elit sodales, convallis purus at, pellentesque purus. Mauris at nunc.",
        date: "19/06/2024"
    },
    {
        client: "Johnny Mousão",
        img: "https://img.icons8.com/?size=100&id=FK8AfMKCrwOU&format=png&color=000000",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas sed elit sodales, convallis purus at, pellentesque purus. Mauris at nunc.",
        date: "19/06/2024"
    },
];

const priorityList = [
    { value: 1, label: '1' },
    { value: 2, label: '2' },
    { value: 3, label: '3' }
];

const departmentList = [
    { value: 'Programming', label: 'Programming' },
    { value: 'Finance', label: 'Finance' },
    { value: 'Design', label: 'Design' }
];

const statusList = [
    { value: 'New', label: 'New' },
    { value: 'Solved', label: 'Solved' },
    { value: 'Waiting', label: 'Waiting' },
    { value: 'Rejected', label: 'Rejected'}
];

const AdminTicketReply = () => {
    const [department, setDepartment] = useState('');
    const [priority, setPriority] = useState('');
    const [status, setStatus] = useState('');

    const handleAccept = () => {
        // Implement logic for accepting the ticket
        console.log('Accepted');
    };

    const handleSend = () => {
        // Implement logic for sending a reply
        console.log('Sent');
    };

    const handleRefuse = () => {
        // Implement logic for refusing the ticket
        console.log('Refused');
    };

    return (
        <div className="container bg-light w-100 p-2x">
            <div className="container">
                <div className="box-container bg-white roundbg h-100 p-4 shadow">
                    <div className="row border-bottom">
                        <h4 className='text-start'>Ticket #</h4>
                        <p className='text-start my-0'>{ticketsList[0].client}</p>
                        <p className='text-start mt-1'>{ticketsList[0].date}</p>
                    </div>
                    <div className="row m-2 border-bottom">
                        <img src={ticketsList[0].img} alt="Client" className="img-fluid" style={{ width: '200px', height: '200px' }} />
                    </div>
                    <div className='row mt-3'>
                        <h6 className='text-start'>Description</h6>
                        <div className='row'>
                            <span>{ticketsList[0].description}</span>
                        </div>
                    </div>
                    <form action="https://usebasin.com/f/8a781ebd5951" method="POST" target='_blank'  className='row d-flex mt-4'>
                        <div className="row d-flex justify-content-between">
                            <div className='col-4'>
                                <label htmlFor="departmentSelect">Department</label>
                                <select
                                    id="departmentSelect"
                                    className="form-select"
                                    value={department}
                                    onChange={(e) => setDepartment(e.target.value)}
                                >
                                    <option value="">Select Department</option>
                                    {departmentList.map((dept) => (
                                        <option key={dept.value} value={dept.value}>{dept.label}</option>
                                    ))}
                                </select>
                            </div>
                            <div className='col-4'>
                                <label htmlFor="prioritySelect">Priority</label>
                                <select
                                    id="prioritySelect"
                                    className="form-select"
                                    value={priority}
                                    onChange={(e) => setPriority(e.target.value)}
                                >
                                    <option value="">Select Priority</option>
                                    {priorityList.map((prio) => (
                                        <option key={prio.value} value={prio.value}>{prio.label}</option>
                                    ))}
                                </select>
                            </div>
                            <div className='col-4'>
                                <label htmlFor="statusSelect">Status</label>
                                <select
                                    id="statusSelect"
                                    className="form-select"
                                    value={status}
                                    onChange={(e) => setStatus(e.target.value)}
                                >
                                    <option value="">Select Status</option>
                                    {statusList.map((stat) => (
                                        <option key={stat.value} value={stat.value}>{stat.label}</option>
                                    ))}
                                </select>
                            </div>
                        </div>
                        <div className=" mb-3 col-8">
                            <label htmlFor="descriptioninput">Reply</label>
                            <textarea className="form-control" id="descriptioninput" rows="3" maxLength="250"></textarea>
                        </div>
                        <div className=" mb-3 col">
                            <div className="row d-flex mt-3 justify-content-end">
                                <div className="col-4">
                                    <button type="button" className="btn btn-success hover shadow col-12" onClick={handleAccept}>Save</button>
                                </div>
                                <div className="col-4">
                                    <button type="button" className="btn btn-info text-white hover shadow col-12" onClick={handleSend}>Send Reply</button>
                                </div>
                                <div className="col-4">
                                    <button type="button" className="btn btn-danger hover shadow col-12" onClick={handleRefuse}>Refuse</button>
                                </div>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default AdminTicketReply;
