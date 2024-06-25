import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import '../../App.css';

const EditProduct = () => {
    const { idProduct } = useParams(); // Fetch the id from URL parameter
    const [product, setProduct] = useState({
        productName: '',
        productPrice: '',
        productVersion: '',
        productDescript: '',
        image: '',
    });
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchProduct = async () => {
            try {
                const response = await axios.get(`http://localhost:8080/product/${idProduct}`);
                const data = response.data;
                setProduct({
                    productName: data.productName,
                    productPrice: data.productPrice,
                    productVersion: data.productVersion,
                    productDescript: data.productDescript,
                    image: data.image,
                });
                setIsLoading(false);
            } catch (error) {
                console.error('Error fetching product details:', error);
                setError(error);
                setIsLoading(false);
            }
        };

        fetchProduct();
    }, [idProduct]);

    if (isLoading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>Error fetching product details: {error.message}</div>;
    }

    return (
        <div className="dashboard-content bg-light w-100 p-2 mt-4">
            <div className="container">
                <div className="box-container bg-white roundbg d-flex h-100 p-2 shadow">
                    <div className="col-12">
                        <h2 className='text-start p-3'>{product.productName}</h2>
                        <form>
                            <div className="row mx-1">
                                <div className="col-6">
                                    <div className="form-group mb-3">
                                        <label htmlFor="productnameinput">Product Name</label>
                                        <input
                                            type="text"
                                            className="form-control"
                                            id="productnameinput"
                                            placeholder="Name"
                                            value={product.productName}
                                        />
                                    </div>
                                    <div className="form-group mb-3">
                                        <label htmlFor="productpriceinput">Unit Price</label>
                                        <input
                                            type="number"
                                            className="form-control"
                                            id="productpriceinput"
                                            placeholder="Unit Price"
                                            value={product.productPrice}
                                        />
                                    </div>
                                    <div className="form-group mb-3">
                                        <label htmlFor="descriptioninput">Description</label>
                                        <textarea
                                            className="form-control"
                                            id="descriptioninput"
                                            rows="2"
                                            maxLength="75"
                                            value={product.productDescript}
                                        ></textarea>
                                    </div>
                                </div>
                                <div className="col-6">
                                    <div className="form-group mb-3">
                                        <label htmlFor="imagelinkinput">Image</label>
                                        <input
                                            type="text"
                                            className="form-control"
                                            id="imagelinkinput"
                                            placeholder="Image"
                                            value={product.image}
                                        />
                                    </div>
                                </div>
                            </div>
                        </form>
                        <div className="row d-flex flex-row m-3">
                            <div className='col-8'></div>
                            <div className="col-2">
                                <button type="button" className="btn btn-outline-success col-12 hover">Save</button>
                            </div>
                            <div className="col-2">
                                <button type="button" className="btn btn-outline-danger col-12 hover">Cancel</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default EditProduct;
