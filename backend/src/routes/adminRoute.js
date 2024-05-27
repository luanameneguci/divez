const express = require("express");
const router = express.Router();

const adminController = require("../controllers/adminController");

router.get("/", adminController.admin_list); 

router.get("/:id", adminController.admin_detail); 

router.get("/departments", adminController.department_list); 

router.post("/create", adminController.admin_create);

router.post("/createDepartment", adminController.admin_create_department);

router.put("/update/:id", adminController.admin_update);

module.exports = router;