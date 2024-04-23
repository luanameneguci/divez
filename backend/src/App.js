const express = require("express");
const app = express();
const adminRoutes = require('./routes/adminRoute.js');
const billingRoutes = require('./routes/billingRoute.js');
const budgetRoutes = require('./routes/budgetRoute.js');
const bouyerRoutes = require('./routes/buyerRoute.js');
const cartRoutes = require('./routes/cartRoute.js');
const licensesRoutes = require('./routes/licenseRoute.js');
const managerRoutes = require('./routes/managerRoute.js');
const packagesRoutes = require('./routes/packagesRoute.js');
const productsRoutes = require('./routes/productsRoute.js');
const ticketsRoutes = require('./routes/ticketRoute.js');
//Configurações
app.set("port", process.env.PORT || 3000);
//Middlewares
app.use(express.json());
//Rotas
app.use("/teste", (req, res) => {
  res.send("Rota TESTE.");
});
app.use("/", (req, res) => {
  res.send("Hello World");
});
app.listen(app.get("port"), () => {
  console.log("Start server on port " + app.get("port"));
});
