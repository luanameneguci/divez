import React, { useState } from 'react';
import '../../App.css';
import ProductList from '../../components/ProductList';

const AdminProductList = () => {
    return (
        <div className="container bg-light w-100 h-100">
            <div className='d-flex justify-content-between p-2'>
                <h4 className="title my-2">Products</h4>
                <button className='btn btn-success me-2 my-2'>Add Product</button>
            </div>
            <ProductList />
        </div>
    );
}

export default AdminProductList;
