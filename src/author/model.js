const { DataTypes } = require("sequelize");
const sequelize = require("../db/connections");

const Author = sequelize.define(
  "Author",
  {
    authorname: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  { timestamps: false }
);

module.exports = Author;
