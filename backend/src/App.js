const express = require("express");
const app = express();
const adminRoutes = require('./routes/adminRoute.js');
const buyerRoutes = require('./routes/buyerRoute.js');
const managerRoutes = require('./routes/managerRoute.js');

//Configurações
app.set("port", process.env.PORT || 3000);
//Middlewares
app.use(express.json());
//Rotas
app.use('/admin',adminRoutes)
/*
app.use('/buyer/:idBuyer',buyerRoutes)
app.use('/manager',managerRoutes) */


app.use("/", (req, res) => {
  res.send("Hello World");
});
app.listen(app.get("port"), () => {
  console.log("Start server on port " + app.get("port"));
});
