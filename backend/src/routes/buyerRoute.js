const express = require("express");
const router = express.Router();

const buyerController = require("../controllers/buyerController");

router.get("/", buyerController.buyer_dashboard);

router.get("/products", buyerController.buyer_products);

router.get("/store", buyerController.buyer_store);

router.get("/store/product/:idProduct", buyerController.buyer_store_product);

router.get("/budget/:idBudget", buyerController.budget);

router.get("/product/:idProduct", buyerController.buyer_specific_product);

router.get("/product/managers/:idProduct", buyerController.buyer_product_managers);

router.get("/product/package/:idPackage", buyerController.buyer_specific_package);

router.get("/manager/products/:idManager", buyerController.buyer_manager_products);

router.get("/budgets", buyerController.buyer_budgets);

router.get("/purchases", buyerController.buyer_purchases);

router.get("/cart", buyerController.buyer_cart);

router.get("/inbox", buyerController.buyer_inbox);

router.post("/manager/create", buyerController.buyer_manager_create);

router.post("/inbox/create", buyerController.buyer_message_create);

router.put("/manager/update/:idManager", buyerController.buyer_manager_update);

router.put("/budget/update/:idBudget", buyerController.buyer_budget_update);

router.put("cart/update/:idCart", buyerController.buyer_cart_update);

router.put("buyer/update/:idBuyer", buyerController.buyer_update);

router.delete("cart/delete/:idCart", buyerController.buyer_cart_delete);





