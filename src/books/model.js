const { DataTypes } = require("sequelize");

const sequelize = require("../db/connections");

const Book = sequelize.define(
  "Book",
  {
    title: {
      type: DataTypes.STRING,
      unique: true,
      allowNull: false,
    },
  },
  { timestamp: false }
);

module.exports = Book;
