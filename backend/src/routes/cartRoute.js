const express = require("express");
const router = express.Router();

const cartController = require("../controllers/cartController");

router.get("/", cartController.cart_list);

router.get("/:id", cartController.cart_detail);

router.post("/create", cartController.cart_create);

router.put("/update/:id", cartController.cart_update);

router.delete("/delete/:id", cartController.cart_delete);

module.exports = router;