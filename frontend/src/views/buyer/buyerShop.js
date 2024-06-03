import React, { useState, useEffect } from "react";
import "../../App.css";
import Rating from "@mui/material/Rating";

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
  },
  {
    nomeApp: "Adobe Illustrator",
    photo: "https://img.icons8.com/?size=100&id=13631&format=png&color=000000",
    price: 0,
    Packages: "Adobe Essencials",
    Category: "Illustration",
    ActiveInstall: 500000,
    Version: "2.1.0",
    Review: 4.8,
    description:
      "A fitness tracking app to help you achieve your health goals.",
  },
  {
    nomeApp: "Adobe Animate",
    photo:
      "https://img.icons8.com/?size=100&id=FK8AfMKCrwOU&format=png&color=000000",
    price: 9.99,
    Packages: "Adobe Essencials",
    Category: "Animation",
    ActiveInstall: 2000000,
    Version: "3.4.5",
    Review: 4.2,
    description: "Edit and enhance your photos with professional tools.",
  },
];

const BuyerShop = () => {
  return (
    <div className="dashboard-content bg-light w-100">
      <h4 className="title px-4 py-3">Shop</h4>
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
  for (let i = 0; i < item.length && items.length < 3; i++) {
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
    ];
    items.push(subArray);
  }
  return items;
}

const ItemStatus = ({ itemData }) => {
  return (
    <div className="my-3 m-3">
      <div className="col-12 d-flex align-items-center p-3 justify-content-between flex-column bg-white">
        <div className="col-12 row">
          <div className="col-2">
            <img src={itemData[1]} alt={`${itemData[0]}`} className="mr-3" />
          </div>
          <div className="col-10">
            <div className="col-12 row ms-2">
              <div className="col-8 mt-3 d-flex justify-content-start">
                <p className="mb-0">
                  <strong>{itemData[0]}</strong>
                </p>
              </div>
              <div className="col-4 mb-2 mt-3 d-flex justify-content-end">
                <div>
                  <img
                    className="me-2"
                    src="https://img.icons8.com/?size=100&id=CE7rP-35_XQR&format=png&color=000000"
                    style={{ height: 30 + "px" }}
                  />
                  <img
                    src="https://img.icons8.com/?size=100&id=nwhUUqONScaC&format=png&color=000000"
                    style={{ height: 30 + "px" }}
                  />
                </div>
              </div>
            </div>
            <div className="col-12 row d-flex justify-content-end ms-2">
              <div className="col-6 d-flex justify-content-start">
                <Rating
                  name="read-only"
                  value={itemData[7]}
                  readOnly
                  precision={0.5}
                />
              </div>
              <div className="col-6 d-flex justify-content-end">
                <p className="mb-0">{itemData[2]}/ month</p>
              </div>
            </div>
          </div>
          <div className="col-12 my-3 d-flex justify-content-start">
              <p className="mb-0" style={{ minHeight: 48 + "px", textAlign: "justify" }}>
                {itemData[8]}
              </p>
            </div>
        </div>
        <div className="col-12 row my-3 ">
          <div className="col-6 d-flex justify-content-start">
            <p className="mb-0">
              <strong>Packages: </strong>
              {itemData[3]}
            </p>
          </div>
          <div className="col-6 d-flex justify-content-end">
            <p className="mb-0">
              <strong>Category: </strong>
              {itemData[4]}
            </p>
          </div>
        </div>
        <div className="col-12 row">
          <div className="col-6 d-flex justify-content-start">
            <p className="mb-0">{itemData[5]} active Installations</p>
          </div>
          <div className="col-6 d-flex justify-content-end">
            <p className="mb-0">
              <strong>Version: </strong>
              {itemData[6]}
            </p>
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
        <div className="col-6">
          <ItemStatus itemData={item} />
        </div>
      ))}
    </div>
  );
};

let items = createDataArraysItems(itemsDataArray);

export default BuyerShop;

//npm install @mui/material @mui/styled-engine-sc styled-components
//npm install @mui/material @emotion/react @emotion/styled
//npm install @mui/icons-material
