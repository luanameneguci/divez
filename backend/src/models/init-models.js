var AdminBudget = require("../models/AdminBudget");
var Department = require("../models/adminDepartments");
var AdminProduct = require("../models/AdminProduct");
var AdminTicket = require("../models/AdminTicket");
var CartProduct = require("../models/CartProduct");
var ManagerLicense = require("../models/ManagerLicense");
var Admin = require("../models/admins");
var Buyer = require("../models/buyer");
var Cart = require("../models/cart");
var Bill = require("../models/bills");
var BudgetStatus = require("../models/budgetStatus");
var Budget = require("../models/budget");
var Category = require("../models/categories");
var LicenseStatus = require("../models/licenseStatus");
var LicenseUser = require("../models/licenseUser");
var License = require("../models/licenses");
var Manager = require("../models/manager");
var Package = require("../models/package");
var Product = require("../models/products");
var TicketDepartment = require("../models/ticketDepartment");
var TicketStatus = require("../models/ticketStatus");
var Ticket = require("../models/tickets");



AdminBudget.sync();
AdminProduct.sync();
AdminTicket.sync();
CartProduct.sync();
Department.sync();
BudgetStatus.sync();
ManagerLicense.sync();
LicenseStatus.sync();
LicenseUser.sync();
TicketDepartment.sync();
TicketStatus.sync();
Package.sync();
Product.sync();
Category.sync();

Admin.sync();

Buyer.sync();

Cart.sync();

Manager.sync();

/*
Bill.sync();

Budget.sync();

License.sync();

Ticket.sync(); 

*/



