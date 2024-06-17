var DataTypes = require("sequelize").DataTypes;
var _AdminBudget = require("./AdminBudget");
var _AdminProduct = require("./AdminProduct");
var _AdminTicket = require("./AdminTicket");
var _CartProduct = require("./CartProduct");
var _category = require("./categories");
var _ManagerLicense = require("./ManagerLicense");
var _admindepartments = require("./adminDepartment");
var _admins = require("./admin");
var _bills = require("./billing");
var _budgetStatuses = require("./budgetStatus");
var _budgets = require("./budget");
var _buyers = require("./buyer");
var _carts = require("./cart");
var _licenseUsers = require("./licenseUser");
var _licenses = require("./licenses");
var _managers = require("./manager");
var _messages = require("./message");
var _packages = require("./package");
var _products = require("./products");
var _ticketDepartments = require("./ticketDepartment");
var _ticketStatus = require("./ticketStatus");
var _tickets = require("./tickets");
var _licenseStatus = require("./licenseStatus");
var _ticketPrint = require("./ticketPrint");

function initModels(sequelize) {
  var budgetStatus = new _budgetStatuses(sequelize, DataTypes);
  var budgets = new _budgets(sequelize, DataTypes);
  var AdminBudget = new _AdminBudget(sequelize, DataTypes);
  var AdminProduct = new _AdminProduct(sequelize, DataTypes);
  var AdminTicket = new _AdminTicket(sequelize, DataTypes);
  var CartProduct = new _CartProduct(sequelize, DataTypes);
  var ManagerLicense = new _ManagerLicense(sequelize, DataTypes);
  var adminDepartments = new _admindepartments(sequelize, DataTypes);
  var admins = new _admins(sequelize, DataTypes);
  var buyers = new _buyers(sequelize, DataTypes);
  var carts = new _carts(sequelize, DataTypes);
  var bills = new _bills(sequelize, DataTypes);
  var licenseStatus = new _licenseStatus(sequelize, DataTypes);
  var licenseUsers = new _licenseUsers(sequelize, DataTypes);
  var licenses = new _licenses(sequelize, DataTypes);
  var managers = new _managers(sequelize, DataTypes);
  var ticketDepartments = new _ticketDepartments(sequelize, DataTypes);
  var ticketStatus = new _ticketStatus(sequelize, DataTypes);
  var ticketPrint = new _ticketPrint(sequelize, DataTypes);
  var tickets = new _tickets(sequelize, DataTypes);
  var messages = new _messages(sequelize, DataTypes);
  var category = new _category(sequelize, DataTypes);
  var package = new _packages(sequelize, DataTypes);
  var products = new _products(sequelize, DataTypes);

  admins.belongsTo(adminDepartments, { foreignKey: "idDepartment" });
  adminDepartments.hasMany(admins, { foreignKey: "idDepartment" });
  bills.belongsTo(carts, { foreignKey: "idCart" });
  carts.hasMany(bills, { foreignKey: "idCart" });
  budgetStatus.hasMany(budgets, { foreignKey: "idBudgetStatus" });
  budgets.belongsTo(budgetStatus, { foreignKey: "idBudgetStatus" });
  budgets.belongsTo(carts, { foreignKey: "IdCart" });
  carts.hasMany(budgets, { foreignKey: "idCart" });
  carts.belongsTo(buyers, { foreignKey: "idBuyer" });
  buyers.hasMany(carts, { foreignKey: "idBuyer" });
  licenses.belongsTo(bills, { foreignKey: "idBill" });
  bills.hasMany(licenses, { foreignKey: "idBill" });
  licenses.belongsTo(licenseUsers, { foreignKey: "idLicenseUser" });
  licenseUsers.hasMany(licenses, { foreignKey: "idLicenseUser" });
  licenses.belongsTo(buyers, { foreignKey: "idBuyer" });
  buyers.hasMany(licenses, { foreignKey: "idBuyer" });
  licenses.belongsTo(licenseStatus, { foreignKey: "idLicenseStatus" });
  licenseStatus.hasMany(licenses, { foreignKey: "idLicenseStatus" });
  managers.belongsTo(buyers, { foreignKey: "idBuyer" });
  buyers.hasMany(managers, { foreignKey: "idBuyer" });
  messages.belongsTo(tickets, { foreignKey: "idTicket" });
  tickets.hasMany(messages, { foreignKey: "idTicket" });
  ticketPrint.belongsTo(tickets, { foreignKey: "idTicket" });
  tickets.hasMany(ticketPrint, { foreignKey: "idTicket" });
  tickets.belongsTo(buyers, { foreignKey: "idBuyer" });
  buyers.hasMany(tickets, { as: "ticketsbuyer", foreignKey: "idBuyer" });
  tickets.belongsTo(ticketDepartments, { foreignKey: "idTicketDepartment"});
  ticketDepartments.hasMany(tickets,{foreignKey: "idTicketDepartment"});
  tickets.belongsTo(managers, { foreignKey: "idManager" });
  managers.hasMany(tickets, { foreignKey: "idManager" });
  tickets.belongsTo(ticketStatus, {foreignKey: "idTicketstatus"});
  ticketStatus.hasMany(tickets, {foreignKey: "idTicketstatus"});

  return {
    AdminBudget,
    AdminProduct,
    AdminTicket,
    CartProduct,
    ManagerLicense,
    adminDepartments,
    admins,
    bills,
    budgetStatus,
    budgets,
    buyers,
    category,
    carts,
    licenseStatus,
    licenseUsers,
    licenses,
    managers,
    messages,
    products,
    ticketDepartments,
    ticketStatus,
    tickets,
    package
  };
}

module.exports = initModels;
module.exports.initModels = initModels;
module.exports.default = initModels;
