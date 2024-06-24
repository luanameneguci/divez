import React from "react";
import "../../App.css";
import { Modal } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const ManagerProductList = () => {
    const [lgShow, setLgShow] = React.useState(false);
    const [selectedProduct, setSelectedProduct] = React.useState(null);

    const handleShow = (productName) => {
        setSelectedProduct(productName);
        setLgShow(true);
    };

    const handleClose = () => {
        setLgShow(false);
        setSelectedProduct(null);
    };

    let data = [
        {
            nome: "Adobe Photoshop",
            status: "Outdated",
        },
        {
            nome: "Adobe Illustrator",
            status: "Outdated",
        },
        {
            nome: "Adobe Animate",
            status: "Disabled",
        },
        {
            nome: "Adobe After Effects",
            status: "Updated",
        },
        {
            nome: "Adobe After Effects",
            status: "Updated",
        },
        {
            nome: "Adobe After Effects",
            status: "Updated",
        },
    ];

    const getStatusClass = (status) => {
        switch (status) {
            case "Outdated":
                return "text-outdated";
            case "Disabled":
                return "text-disabled";
            case "Updated":
                return "text-updated";
            default:
                return "";
        }
    };

    return (
        <div className="dashboard-content bg-light w-100 h-100">
            <div className="d-flex justify-content-between p-2 mx-3">
                <h2 className="title my-2">Products</h2>
            </div>
            <div className="col-12 bg-white roundbg">
                <div className="w-100 d-flex p-3 border-bottom">
                    <div className="col-3 mx-2">
                        <h5>Name</h5>
                    </div>
                    <div className="col-1 mx-2">
                        <h5>Status</h5>
                    </div>
                    <div className="col-4 mx-2"></div>
                </div>
                {data.map((item, index) => (
                    <div className="d-flex col-12 p-3 border-bottom" key={index}>
                        <div className="col-3 mx-2 d-flex ">
                            <h5 className="my-auto">{item.nome}</h5>
                        </div>
                        <div className="col-1 mx-2 d-flex">
                            <p className={`my-auto ${getStatusClass(item.status)}`}>{item.status}</p>
                        </div>
                        <div className="col-4 ms-auto text-end">
                            {item.status === "Outdated" && (
                                <button
                                    className="col btn btn-outline-warning hover m-2"
                                    onClick={() => handleShow(item.nome)}
                                >
                                    Update
                                </button>
                            )}
                            <Link to='/faq' className="col btn btn-outline-info hover m-2">Help</Link>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ManagerProductList;
