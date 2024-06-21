import React, { useState, useEffect } from "react";
import "../../App.css";
import Rating from "@mui/material/Rating";

const productVersion = 1.3;

const itemsDataArray = [
  {
    nomeApp: "Adobe Photoshop",
    photo: "https://img.icons8.com/?size=100&id=13677&format=png&color=000000",
    price: 4.99,
    Packages: "Adobe Essencials",
    Category: "Photography",
    ActiveInstall: 1000000,
    Version: "1.2.3",
    Review: 3.4,
    description:
      "A fitness tracking app to help you achieve your health goals.",
    id: 1,
    numeroTotal: 1000,
    numeroAtivos: 750,
  },
];

const BuyerProductItem = () => {
  return (
    <div className="dashboard-content bg-light w-100">
      <div className="container text-center py-4">
        <div className="row">
          <div className="col-12">
            <ItemList items={items} />
          </div>
        </div>
      </div>
    </div>
  );
};

function createDataArraysItems(item) {
  // Initialize the result array
  let items = [];

  // Loop through the data and create sub-arrays
  for (let i = 0; i < item.length; i++) {
    let subArray = [
      item[i].nomeApp,
      item[i].photo,
      item[i].price,
      item[i].Packages,
      item[i].Category,
      item[i].ActiveInstall,
      item[i].Version,
      item[i].Review,
      item[i].description,
      item[i].id,
      item[i].numeroTotal,
      item[i].numeroAtivos,
    ];
    items.push(subArray);
  }
  return items;
}

const ItemStatus = ({ itemData }) => {
  return (
    <div>
      <div className="col-12 d-flex">
        <div className="col-2">
          <img src={itemData[1]} alt={`${itemData[0]}`} className="mr-3" />
        </div>
        <div className="col-7 mt-3 justify-content-start">
          <h2 className="mb-0 text-start">
            <strong>{itemData[0]}</strong>
          </h2>
          <div className="col-6 d-flex justify-content-start">
            <Rating
              name="read-only"
              value={itemData[7]}
              readOnly
              precision={0.5}
            />
          </div>
        </div>
      </div>
      <div className="my-3 col-12 d-flex">
        <div className="col-6 d-flex align-items-center p-3 justify-content-between flex-column bg-white rounded shadow me-2">
          <div className="col-12 row">
            <div className="col-6 text-start">
              <h5>
                <strong>Product version:</strong> {productVersion}
              </h5>
              <h5>
                <strong>Your version:</strong> {itemData[6]}
              </h5>
            </div>
            <div className="col-6 text-end mt-auto">
              <button
                type="submit"
                className="btn bg-info btn-block btn-lg text-white hover1"
              >
                <strong>Update</strong>
              </button>
            </div>
          </div>
        </div>
        <div className="col-6 d-flex align-items-center p-3 justify-content-between flex-column bg-white rounded shadow ms-2">
          <div className="col-12 row">
            <div className="col-6 text-start">
              <h5>
                <strong>Product version:</strong> {productVersion}
              </h5>
              <h5>
                <strong>Your version:</strong> {itemData[6]}
              </h5>
            </div>
            <div className="col-6 text-end mt-auto">
              <button
                type="submit"
                className="btn bg-info btn-block btn-lg text-white hover1"
              >
                <strong>Update</strong>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const ItemList = ({ items }) => {
  return (
    <div className="items-list d-flex flex-wrap justify-content-between">
      {items.map((item, index) => (
        <div className="col-12">
          <ItemStatus itemData={item} />
        </div>
      ))}
    </div>
  );
};

function calculatePercentages(result) {
    // Initialize the result array
    let resultado = [];

    // Loop through the data and create sub-arrays with percentage
    for (let i = 0; i < result.length; i++) {
      let item = result[i];
      let percentage = (item[2] / item[1]) * 100;
      // Create a new object with the original values and the calculated percentage
      let newItem = {
        ...item,
        percentage: percentage.toFixed(0), // Fix to 2 decimal places
      };
      resultado.push(newItem);
    }

    // Return the result array
    return resultado;
  }

let items = createDataArraysItems(itemsDataArray);
let resultado = calculatePercentages(items);


export default BuyerProductItem;

//npm install @mui/material @mui/styled-engine-sc styled-components
//npm install @mui/material @emotion/react @emotion/styled
//npm install @mui/icons-material
