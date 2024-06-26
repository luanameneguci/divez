const express = require("express");
const router = express.Router();

const buyerController = require("../controllers/buyerController");

router.get("/", buyerController.buyer_list);

router.get("/:id", buyerController.buyer_detail);

router.post("/create", buyerController.buyer_create);

router.put("/update/:id", buyerController.buyer_update);

router.post("/delete/:id", buyerController.buyer_delete);

module.exports = router;