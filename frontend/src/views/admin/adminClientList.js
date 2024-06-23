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
    ];
    
    return (
        <div className="container bg-light w-100">
            <h4 className="title my-2">Clients</h4>
            <div className="container text-center">
                <div className="row my-4">
                    <div className="col-12">
                        <ClientListBox clientList={clientList}/>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default AdminClientList;
