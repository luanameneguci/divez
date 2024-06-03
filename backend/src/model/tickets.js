const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('tickets', {
    idTicket: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    ticketName: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    ticketDescript: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    ticketData: {
      type: DataTypes.DATE,
      allowNull: true
    },
    ticketPriority: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    idBuyer: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'buyers',
        key: 'idBuyer'
      }
    },
    idTicketstatus: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'ticketStatus',
        key: 'idTicketStatus'
      }
    },
    idTicketDepartment: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'ticketDepartments',
        key: 'idTicketDepartment'
      }
    },
    idManager: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'managers',
        key: 'idManager'
      }
    },
    buyerIdBuyer: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'buyers',
        key: 'idBuyer'
      }
    },
    ticketStatusIdTicketStatus: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'ticketStatus',
        key: 'idTicketStatus'
      }
    },
    ticketDepartmentIdTicketDepartment: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'ticketDepartments',
        key: 'idTicketDepartment'
      }
    },
    managerIdManager: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'managers',
        key: 'idManager'
      }
    }
  }, {
    sequelize,
    tableName: 'tickets',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "tickets_pkey",
        unique: true,
        fields: [
          { name: "idTicket" },
        ]
      },
    ]
  });
};
