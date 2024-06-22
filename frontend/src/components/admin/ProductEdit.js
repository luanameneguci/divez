import React from 'react';
import '../../App.css';
import Select from 'react-select';
import { BrowserRouter as Link } from 'react-router-dom';


{/*Não esquecer de fazer uma cena como a "notificação que aparece quando adicionamos um filme na ficha 7 (aquele alert informativo)
function SendUpdate() {
        const url = baseUrl + "/edit/" + movieid
        const datapost = {
            title: campTitle,
            description: campDescription,
            image: campImage,
            genre: selectGenre
        };
        axios.post(url, datapost)
            .then(response => {
                if (response.data.success === true) {
                    alert(response.data.message)
                }
                else {
                    alert("Error")
                }
            }).catch(error => {
                alert("Error 34 " + error)
            })
    }


*/ }



{/*para usar o multioption package selection*/ }

{/*npm i --save react-select*/ }

const categoriesList = [
    "Programing", "Design", "Animation", "etc"
];


const CategoryOptions = ({ dataCategories }) => {
    return dataCategories.map((data, index) => (
        <option key={index} value={index}>
            {data}
        </option>
    ));
};

//Provavelmente vai ser preciso trocar os values para o id dos packages
const packagesList = [
    { value: 'Adobe', label: 'Adobe' },
    { value: 'Essencial Programming', label: 'Essencial Programming' },
    { value: 'Animation Basics', label: 'Animation Basics' }
]

const ProductEdit = () => {
    return (
        <div className="dashboard-content bg-light w-100 p-2 mt-4">
            <div className="container">
                <div className="box-container bg-white roundbg d-flex h-100 p-2 shadow">
                    <div className="col-12">
                        <h2 className='text-start p-3'>Software Name</h2>
                        <form>
                            <div className="row mx-1">
                                <div className="col-6">
                                    <div className="form-group mb-3">
                                        <label htmlFor="productnameinput">Product Name</label>
                                        <input type="text" className="form-control" id="productnameinput" placeholder="Name" />
                                    </div>
                                    <div className="form-group mb-3">
                                        <label htmlFor="productpriceinput">Unit Price</label>
                                        <input type="number" className="form-control" id="productpriceinput" placeholder="Unit Price" />
                                    </div>
                                    <div className="form-group mb-3">
                                        <label htmlFor="descriptioninput">Description</label>
                                        <textarea className="form-control" id="descriptioninput" rows="2" maxLength="75"></textarea>
                                    </div>
                                </div>
                                <div className="col-6">
                                    <div className="form-group mb-3">
                                        <label htmlFor="categoryinput">Category</label>
                                        <select id="categoryinput" className="form-control">
                                            <option>Choose category...</option>
                                            {categoriesList.map((category, index) => (
                                                <option key={index}>{category}</option>
                                            ))}
                                        </select>
                                    </div>
                                    <div className="form-group mb-3">
                                        <label htmlFor="imagelinkinput">Image</label>
                                        <input type="text" className="form-control" id="imagelinkinput" placeholder="Image" />
                                    </div>
                                    <div className="form-group mb-3">
                                        <label htmlFor="packagesinput">Packages</label>
                                        <Select
                                            id="packagesinput"
                                            options={packagesList}
                                            isMulti
                                            placeholder="Choose packages..."
                                            className="form-control p-0"
                                        />
                                    </div>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
            <div className="row fixed-bottom-buttons d-flex flex-row m-3">
                <div className="col-6">
                    <button type="button" class="btn btn-outline-success">Save</button>
                </div>
                <div className="col-6">
                    <Link to='/products' class="btn btn-outline-danger">Cancel</Link>
                </div>
            </div>


        </div>
    );
}

export default ProductEdit;
