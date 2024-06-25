import React from 'react';
import '../../App.css';
import ClientListBox from '../../components/admin/ClientListBox';

const AdminClientList = () => {
    const clientList = [
        ['Luana Meneguci', '123456789', 'luanameneguci@gmail.com', 'Client'],
        ['Andre Pascoal', '123456789', 'luanameneguci@gmail.com', 'Client'],
        ['Luana Meneguci', '123456789', 'luanameneguci@gmail.com', 'Client'],
        ['Luana Meneguci', '123456789', 'luanameneguci@gmail.com', 'Client'],
        ['Luana Meneguci', '123456789', 'luanameneguci@gmail.com', 'Client'],
        ['Luana Meneguci', '321321321', 'luanameneguci@gmail.com', 'Manager'],
        ['Luana Meneguci', '123456789', 'luanameneguci@gmail.com', 'Client'],
        ['Andre Pascoal', '123456789', 'luanameneguci@gmail.com', 'Client'],
        ['Luana Meneguci', '123456789', 'luanameneguci@gmail.com', 'Client'],
        ['Luana Meneguci', '123456789', 'luanameneguci@gmail.com', 'Client'],
        ['Luana Meneguci', '123456789', 'luanameneguci@gmail.com', 'Client'],
        ['Luana Meneguci', '321321321', 'luanameneguci@gmail.com', 'Manager'],
        ['Luana Meneguci', '123456789', 'luanameneguci@gmail.com', 'Client'],
        ['Andre Pascoal', '123456789', 'luanameneguci@gmail.com', 'Client'],
        ['Luana Meneguci', '123456789', 'luanameneguci@gmail.com', 'Client'],
        ['Luana Meneguci', '123456789', 'luanameneguci@gmail.com', 'Client'],
        ['Luana Meneguci', '123456789', 'luanameneguci@gmail.com', 'Client'],
        ['Luana Meneguci', '321321321', 'luanameneguci@gmail.com', 'Manager'],
    ];

    return (
        <div className="dashboard-content bg-light w-100">
            <h4 className="title my-2 mx-4">Clients</h4>
            <div className="container">
                <div className="my-4">
                    <ClientListBox clientList={clientList} />
                </div>
            </div>
        </div>
    );
}

export default AdminClientList;
