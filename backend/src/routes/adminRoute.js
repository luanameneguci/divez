const express = require("express");
const router = express.Router();

const adminController = require("../controllers/adminController");

router.get("/", adminController.admin_dashboard);

router.get("/clients", adminController.admin_clients);

router.get("/products", adminController.admin_products);

router.get("/sales", adminController.admin_sales);

router.get("/tickets", adminController_tickets);

router.get("/inbox", adminController_inbox);

router.get("/budget", adminController_budgets);

router.get("/clients/:idClient", adminController.admin_specific_client);

router.post("/create", adminController.admin_create);

router.post("/products/create", adminController.admin_product_create);

router.post("/package/create", adminController.admin_package_create);

router.post("/inbox/create", adminController.admin_create_message);

router.put("/update/:idAdmin");

router.put("/product/update/:idProduct", adminController.admin_product_update);

router.put("/product/addToPackage", adminController.admin_addToPackage);

module.exports = router;