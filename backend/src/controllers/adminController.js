
const express = require("express");
var Admin = require("../model/admin");
var AdminDepartment = require("../model/adminDepartment");
var sequelize = require("../model/database");
const controllers = {};
sequelize.sync();