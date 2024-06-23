import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

import '../../App.css';
import ProductList from '../../components/admin/ProductList';

const AdminProductList = () => {
    return (
        <div className="container bg-light w-100 h-100">
            <div className='d-flex justify-content-between p-2 mx-4'>
                <h4 className="title my-2 mx-3">Products</h4>
                <Link to='/addproduct' className="btn btn-block btn-lg text-info hover1 mx-3"
                    style={{backgroundColor: "#C8F2FE"}}><strong>Add Product</strong></Link>
            </div>
            <ProductList />
        </div>
    );
}

export default AdminProductList;
