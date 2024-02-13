const { DataTypes } = require("sequelize");

const sequelize = require("../db/connections");

const Book = sequelize.define("Book", {
  title: {
    type: DataTypes.STRING,
    unique: true,
    allowNull: false,
  },
  author: {
    type: DataTypes.STRING,
    defaultValue: "some author",
  },
  genre: {
    type: DataTypes.STRING,
    defaultValue: "some genre",
  },
});

module.exports = Book;
