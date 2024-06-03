const express = require("express");
const router = express.Router();

const licenseController = require("../controllers/licenseController");

router.get("/", licenseController.license_list); 

router.post("/create", licenseController.license_create);

router.put("/update/:id", licenseController.license_update);

router.get("/:id", licenseController.license_detail); 

router.delete("/delete/:id", licenseController.license_delete);

module.exports = router;