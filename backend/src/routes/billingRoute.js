const express = require("express");
const router = express.Router();

const billController = require("../controllers/billingController");

router.get("/", billController.bill_list); 

router.get("/:id", billController.bill_detail);

router.post("/create", billController.bill_create);

router.put("/update/:id", billController.bill_update);

router.get("/getDetails/:idBuyer", billController.bill_getBillDetails)

router.get("/lastBillId", billController.bill_getLastBillId);

module.exports = router;