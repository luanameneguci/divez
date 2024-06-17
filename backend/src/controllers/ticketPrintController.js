const express = require("express");
const sequelize = require("../model/database");
const { Sequelize, Op, Model, DataTypes } = require('sequelize');
var Ticket = require("../model/tickets")(sequelize, DataTypes);
var TicketPrint = require("../model/ticketPrint")(sequelize, DataTypes);
sequelize.sync();

const controllers = {};

controllers.ticketPrint_list = async (req, res) => {
  const data = await TicketPrint.findAll({include:[Ticket]});
  res.json(data);
};

controllers.ticketPrint_create = async (req, res) => {
  const { idTicket, linkPrint } = req.body;
  const ticketPrint = await TicketPrint.create({
    idTicket, linkPrint
  });
  res.json(ticketPrint);
};

controllers.ticketPrint_update = async (req, res) => {
  let idReceived = req.params.id;
  const { idTicket, linkPrint } = req.body;
  const ticketPrint = await TicketPrint.update(
    { idTicket, linkPrint },
    { where: { idTicketPrint: idReceived } }
  );

  res.json({ ticketPrint });
};

controllers.ticketPrint_detail = async (req, res) => {
  let idReceived = req.params.id;

  const data = await TicketPrint.findOne({ where: { idTicketPrint: idReceived } });
  res.json(data);
};

controllers.ticketPrint_delete = async (req, res) => {
  let idReceived = req.params.id;
  await TicketPrint.destroy({ where: { id: idReceived } });
  res.json({ message: "Excluído com sucesso!" });
};

module.exports = controllers;
