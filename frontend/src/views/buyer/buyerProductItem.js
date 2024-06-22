import React from "react";
import "../../App.css";
import ItemList from "../../components/buyer/ItemList";

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

const items = createDataArraysItems(itemsDataArray);

const BuyerProductItem = () => {
  return (
    <div className="dashboard-content bg-light w-100">
      <div className="container text-center py-4">
        <div className="row">
          <div className="col-12">
            <ItemList items={items} productVersion={productVersion} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default BuyerProductItem;


//npm install @mui/material @mui/styled-engine-sc styled-components
//npm install @mui/material @emotion/react @emotion/styled
//npm install @mui/icons-material
