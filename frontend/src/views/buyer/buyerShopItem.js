import React from "react";
import Rating from "@mui/material/Rating";
import "../../App.css";

// Sample data for items and packages
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
    NamePackage: "Must Have",
    Price: 30.0,
    include: ItemsIncluded,
  },
  {
    NamePackage: "Full Adobe",
    Price: 45.0,
    include: ItemsIncluded,
  },
  {
    NamePackage: "Basic Adobe",
    Price: 20.0,
    include: ItemsIncluded,
  },
];

const itemsDataArray = [
  {
    nomeApp: "Adobe Photoshop",
    photo:
      "https://img.icons8.com/?size=100&id=13677&format=png&color=000000",
    price: 4.99,
    Packages: "Adobe Essentials",
    Category: "Photography",
    ActiveInstall: 1000000,
    Version: "1.2.3",
    Review: 3.4,
    description:
      "A fitness tracking app to help you achieve your health goals.",
    id: 1,
  },
];

const imgElements = createImgElements(ItemsIncluded);
const result = createDataArrays(Package);
const items = createDataArraysItems(itemsDataArray);


// Function to create array of items
function createDataArraysItems(item) {
  let items = [];

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

// Function to create img elements
function createImgElements(photos) {
  return photos.map((photo, index) => (
    <img key={index} src={photo.photo} alt={`Photo ${index + 1}`} />
  ));
}

// Function to create array of packages
function createDataArrays(Package) {
  let result = [];

  for (let i = 0; i < Package.length && result.length < 3; i++) {
    let subArray = [
      Package[i].NamePackage,
      Package[i].Price,
      Package[i].include,
    ];
    result.push(subArray);
  }
  return result;
}

// ItemStatus component
const ItemStatus = ({ items, result }) => {
  return (
    <div className="my-3 m-3 shadow roundbg ">
      <div className="col-12 d-flex align-items-center p-3 justify-content-between flex-column bg-white roundbg">
        <div className="col-12 row">
          <div className="col-2">
            <img src={items[1]} alt={`${items[0]}`} className="mr-3" />
          </div>
          <div className="col-10">
            <div className="col-12 row ms-2">
              <div className="col-7 mt-3 d-flex justify-content-start">
                <h2 className="mb-0">
                  <strong>{items[0]}</strong>
                </h2>
              </div>
              <div className="col-5 mb-2 mt-3 d-flex justify-content-end">
                <div>
                  <div className="d-inline mx-4">
                    <img
                      className="me-2 d-inline"
                      src="https://img.icons8.com/?size=100&id=CE7rP-35_XQR&format=png&color=000000"
                      style={{ height: "30px" }}
                      alt="Add to cart"
                    />
                    <p className="d-inline">Add to cart</p>
                  </div>
                  <div className="d-inline mx-4">
                    <img
                      src="https://img.icons8.com/?size=100&id=nwhUUqONScaC&format=png&color=000000"
                      style={{ height: "30px" }}
                      alt="Add to budget"
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
                  value={items[7]}
                  readOnly
                  precision={0.5}
                />
              </div>
              <div className="col-6 d-flex justify-content-end">
                <p className="mb-0">{items[2]} / month</p>
              </div>
            </div>
          </div>
          <div className="col-12 my-3 d-flex justify-content-start">
            <p
              className="mb-0"
              style={{ minHeight: "48px", textAlign: "justify" }}
            >
              {items[8]}
            </p>
          </div>
        </div>
        <div className="col-12 row my-3 ">
          <div className="col-4 d-flex justify-content-center">
            <p className="mb-0">
              <strong>Category: </strong>
              <span className="text-info">{items[4]}</span>
            </p>
          </div>
          <div className="col-4 d-flex justify-content-center">
            <p className="mb-0">
              <strong>Version: </strong>
              {items[6]}
            </p>
          </div>
          <div className="col-4 d-flex justify-content-center">
            <p className="mb-0">
              <strong>{items[5]}</strong> active Installations
            </p>
          </div>
        </div>
        <div className="col-12 row">
          <p className="my-1 fs-5">
            <strong>Packages: </strong>
          </p>
        </div>

        <div className="col-12">
          <div
            className="col-12 p-2"
          >
            <div className="col-12">
              {/*Aqui vai ser o conteudo de cada um individual (tipo <adminDashboard />*/}
              <div>
                <PackageDivs resultado={result} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// PackageDivs component
const PackageDivs = ({ resultado }) => {
  return (
    <div className="row d-flex justify-content-center">
      {resultado.map((item, index) => (
        <PackageDiv
          key={index}
          nomeApp={item[0]}
          price={item[1]}
          include={item[2]}
        />
      ))}
    </div>
  );
};

// PackageDiv component
const PackageDiv = ({ nomeApp, price, include }) => (


  <div className="packageshoplist col-3 py-3 mx-3 border border-dark border-3 roundbg">
    <div>
      <p>
        <strong>{nomeApp}</strong>
      </p>
      <p>{price}€</p>
      <div className="mx-5">
        {include.map((item, index) => (
          <img key={index} src={item.photo} alt={`Photo ${index + 1}`} />
        ))}
      </div>

    </div>
  </div>

);

// ItemList component
const ItemList = ({ items, result, imgElements }) => {
  return (
    <div className="items-list d-flex flex-wrap justify-content-between">
      {items.map((item, index) => (
        <div className="col-12" key={index}>
          <ItemStatus items={item} result={result} imgElements={imgElements} />
        </div>
      ))}
    </div>
  );
};


// BuyerShop component
const BuyerShop = ({ items, result, imgElements }) => {
  return (
    <div className="dashboard-content bg-light w-100">
      <div className="container text-center py-4">
        <div className="row">
          <div className="col-12">
            <ItemList items={items} result={result} imgElements={imgElements} />
          </div>
        </div>
      </div>
    </div>
  );
};


const BuyerShopItem = () => {
  return <BuyerShop items={items} result={result} imgElements={imgElements} />;
};

export default BuyerShopItem;