import React from 'react';
import '../../App.css';
import Select from 'react-select';

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

//Provavelmente vai ser preciso trocar os values para o id dos produtos
const productList = [
    { value: 'Photoshop', label: 'Photoshop' },
    { value: 'Figma', label: 'Figma' },
    { value: 'VS Code', label: 'VS Code' }
]

const PackageAdd = () => {
    return (
        <div className="dashboard-content bg-light w-100 p-2 mt-4">
            <div className="container">
                <div className="box-container bg-white roundbg d-flex h-100 p-2 shadow">
                    <div className="col-12">
                        <h2 className='text-start p-3'>New Package</h2>
                        <form>
                            <div className="row mx-1">
                                <div className="col-6">
                                    <div className="form-group mb-3">
                                        <label htmlFor="productnameinput">Package Name</label>
                                        <input type="text" className="form-control" id="productnameinput" placeholder="Name" />
                                    </div>
                                    <div className="form-group mb-3">
                                        <label htmlFor="productpriceinput">Price</label>
                                        <input type="number" className="form-control" id="productpriceinput" placeholder="Price" />
                                    </div>

                                    <div className="form-group mb-3">
                                        <label htmlFor="packagesinput">Add Products</label>
                                        <Select
                                            id="packagesinput"
                                            options={productList}
                                            isMulti
                                            placeholder="Choose Products..."
                                            className="form-control p-0"
                                        />
                                    </div>
                                </div>
                                <div className="col-6">
                                    <div className="form-group mb-3">
                                        <label htmlFor="descriptioninput">Description</label>
                                        <textarea className="form-control" id="descriptioninput" rows="7" maxLength="100"></textarea>
                                    </div>


                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
            <div className="row fixed-bottom-buttons d-flex flex-row m-3">
                <div className="col-6">
                    <button type="button" class="btn btn-outline-success">Create</button>
                </div>
                <div className="col-6">
                    <button type="button" class="btn btn-outline-danger">Cancel</button>
                </div>
            </div>


        </div>
    );
}

export default PackageAdd;
