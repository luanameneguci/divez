import React from 'react';
import { BrowserRouter as Link } from 'react-router-dom';

import '../../App.css';
import ProductList from '../../components/admin/ProductList';

const AdminProductList = () => {
    return (
        <div className="container bg-light w-100 h-100">
            <div className='d-flex justify-content-between p-2'>
                <h4 className="title my-2">Products</h4>
                <Link to='/addproduct' className='btn btn-success me-2 my-2'>Add Product</Link>
            </div>
            <ProductList />
        </div>
    );
}

export default AdminProductList;
