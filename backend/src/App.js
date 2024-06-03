const express = require("express");
const app = express();
const adminRoutes = require('./routes/adminRoute.js');
const buyerRoutes = require('./routes/buyerRoute.js');
const managerRoutes = require('./routes/managerRoute.js');
const budgetStatus = require('./routes/budgetStatusRoute.js');

// Configurar CORS
// Configurar CORS
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', 'Authorization, X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Allow-Request-Method');
  res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
  res.header('Allow', 'GET, POST, OPTIONS, PUT, DELETE');
  next();
  }); 

//Configurações
app.set("port", process.env.PORT || 8080);
//Middlewares
app.use(express.json());
//Rotas
app.use('/admin',adminRoutes)
app.use('/buyer',buyerRoutes)
app.use('/manager',managerRoutes)
app.use('/budgetStatus',budgetStatus)

app.listen(app.get("port"), () => {
  console.log("Start server on port " + app.get("port"));
});
