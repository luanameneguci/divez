import React, { useState, useEffect } from "react";
import "../../App.css";
import Rating from "@mui/material/Rating";

const ItemsIncluded = [
  {
    id: 1,
    photo: "https://img.icons8.com/?size=100&id=13677&format=png&color=000000",
  },
  {
    id: 2,
    photo: "https://img.icons8.com/?size=100&id=13677&format=png&color=000000",
  },
  {
    id: 3,
    photo: "https://img.icons8.com/?size=100&id=13677&format=png&color=000000",
  },
];

const Package = [
  {
    NamePackage: "Package1",
    Price: 50.0,
    include: ItemsIncluded,
  },
  {
    NamePackage: "Package2",
    Price: 45.0,
    include: ItemsIncluded,
  },
  {
    NamePackage: "Package3",
    Price: 30.0,
    include: ItemsIncluded,
  },
];
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
  },
];

const BuyerShop = () => {
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
      item[i].id,
    ];
    items.push(subArray);
  }
  return items;
}

const ItemStatus = ({ itemData }) => {
  return (
    <div className="my-3 m-3 shadow rounded ">
      <div className="col-12 d-flex align-items-center p-3 justify-content-between flex-column bg-white rounded">
        <div className="col-12 row">
          <div className="col-2">
            <img src={itemData[1]} alt={`${itemData[0]}`} className="mr-3" />
          </div>
          <div className="col-10">
            <div className="col-12 row ms-2">
              <div className="col-7 mt-3 d-flex justify-content-start">
                <h2 className="mb-0">
                  <strong>{itemData[0]}</strong>
                </h2>
              </div>
              <div className="col-5 mb-2 mt-3 d-flex justify-content-end">
                <div>
                  <div className="d-inline mx-4">
                    <img
                      className="me-2 d-inline"
                      src="https://img.icons8.com/?size=100&id=CE7rP-35_XQR&format=png&color=000000"
                      style={{ height: 30 + "px" }}
                    />
                    <p className="d-inline">Add to cart</p>
                  </div>
                  <div className="d-inline mx-4">
                    <img
                      src="https://img.icons8.com/?size=100&id=nwhUUqONScaC&format=png&color=000000"
                      style={{ height: 30 + "px" }}
                    />
                    <p className="d-inline">Add to budget</p>
                  </div>
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
            <p
              className="mb-0"
              style={{ minHeight: 48 + "px", textAlign: "justify" }}
            >
              {itemData[8]}
            </p>
          </div>
        </div>
        <div className="col-12 row my-3 ">
          <div className="col-4 d-flex justify-content-center">
            <p className="mb-0">
              <strong>Category: </strong>
              <span className="text-info">{itemData[4]}</span>
            </p>
          </div>
          <div className="col-4 d-flex justify-content-center">
            <p className="mb-0">
              <strong>Version: </strong>
              {itemData[6]}
            </p>
          </div>
          <div className="col-4 d-flex justify-content-center">
            <p className="mb-0">
              <strong>{itemData[5]}</strong> active Installations
            </p>
          </div>
        </div>
        <div className="col-12 row">
          <div className="col-6 d-flex justify-content-end">
            <p className="mb-0">
              <strong>Packages: </strong>
            </p>
          </div>
        </div>
      </div>
      <div>
        <div
          className="box-container bg-white col-auto rounded d-flex shadow"
          style={{ height: 360 + "px" }}
        >
          <div className="col-12">
            {/*Aqui vai ser o conteudo de cada um individual (tipo <adminDashboard />*/}
            <div className="px-3">
              <PackageDivs resultado={result} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

function createImgElements(photos) {
  // Return an array of img elements with the src set to each photo URL
  return photos.map((photo, index) => {
      const img = document.createElement('img');
      img.src = photo.photo;
      img.alt = `Photo ${index + 1}`;
      return img;
  });
}

const PackageDivs = ({ resultado }) => {
  return (
    <div>
      {resultado.map((item, index) => (
        <PackageDiv
          key={index}
          nomeApp={item[0]}
          price={item[1]}
        />
      ))}
    </div>
  );
};

const PackageDiv = ({ nomeApp, price, include }) => (
  <div className="mb-3">
    <div className="d-flex justify-content-between">
      <p>
        <strong>{nomeApp}</strong>
      </p>
        <p>
          {price}
        </p>
        <createImgElements />
          
    </div>
  </div>
);

function createDataArrays(Package) {
  // Initialize the result array
  let result = [];

  // Loop through the data and create sub-arrays
  for (let i = 0; i < Package.length && result.length < 3; i++) {
    let subArray = [
      Package[i].NamePackage,
      Package[i].Price,
      Package[i].include,
    ];
    result.push(subArray);
  }

  // Return the result containing a maximum of 4 sub-arrays
  return result;
}

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


const imgElements = createImgElements(ItemsIncluded);
let result = createDataArrays(Package);
let items = createDataArraysItems(itemsDataArray);

export default BuyerShop;

//npm install @mui/material @mui/styled-engine-sc styled-components
//npm install @mui/material @emotion/react @emotion/styled
//npm install @mui/icons-material
