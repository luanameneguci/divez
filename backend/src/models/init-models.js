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


(async () => {
    try {
await AdminBudget.sync();
await AdminProduct.sync();
await AdminTicket.sync();
await CartProduct.sync();
await Department.sync();
await BudgetStatus.sync();
await ManagerLicense.sync();
await LicenseStatus.sync();
await LicenseUser.sync();
await TicketDepartment.sync();
await TicketStatus.sync();
await Package.sync();
await Product.sync();
await Category.sync();

await Admin.sync();

await Buyer.sync();

await Cart.sync();

await Manager.sync();


await Bill.sync();

await Budget.sync();

await License.sync();

await Ticket.sync(); 

console.log("All models were synchronized successfully.");
} catch (error) {
  console.error("An error occurred while syncing models:", error);
}
})();