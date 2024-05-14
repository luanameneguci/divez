const express = require("express");
const router = express.Router();

const adminController = require("../controllers/adminController");

router.get("/", adminController.admin_list); 

/* router.get("/buyers", adminController.admin_buyers);

router.get("/products", adminController.admin_products);

router.get("/licenses", adminController.admin_licenses);

router.get("/tickets", adminController.admin_tickets);

router.get("/inbox/:idTicket", adminController.admin_inbox);

router.get("/budgets", adminController.admin_budgets);

router.get("/buyers/:idbuyer", adminController.admin_specific_buyer);

router.post("/create", adminController.admin_create);

router.post("/products/create", adminController.admin_product_create);

router.post("/package/create", adminController.admin_package_create);

router.post("/inbox/create", adminController.admin_create_message);

router.put("/update/:idAdmin");

router.put("/product/update/:idProduct", adminController.admin_product_update);

router.put("/product/addToPackage", adminController.admin_addToPackage); */

module.exports = router;