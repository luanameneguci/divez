const express = require("express");
const router = express.Router();

module.exports = router;

const budgetController = require("../controllers/budgetController");

router.get("/", budgetController.budget_list); 

router.get("/:id", budgetController.budget_detail);

router.post("/create", budgetController.budget_create);

router.put("/update/:id", budgetController.budget_update);

router.delete("/delete/:id", budgetController.budget_delete);

module.exports = router;