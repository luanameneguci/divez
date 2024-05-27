const express = require("express");
const router = express.Router();

module.exports = router;

const budgetController = require("../controllers/budgetController");

router.get("/", budgetController.budget_list); 

router.get("/budgetStatus", budgetController.budget_status_list);

router.get("/:id", budgetController.budget_detail);

router.post("/create", budgetController.budget_create);

router.put("/update/:id", budgetController.budget_update);

module.exports = router;