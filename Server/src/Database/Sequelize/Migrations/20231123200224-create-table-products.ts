import { QueryInterface, DataTypes } from "sequelize";

module.exports = {
  up: (queryInterface: QueryInterface) => {
    return queryInterface.createTable("products", {
      id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
      },
      categoryId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: { model: "categories", key: "id" },
      },
      productName: {
        type: DataTypes.STRING(100),
        allowNull: false,
      },
      amount: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      price: {
        type: DataTypes.DOUBLE,
        allowNull: false,
      },
      available: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
      }
    })
  },

  down: (queryInterface: QueryInterface) => {
    return queryInterface.dropTable("products");
  }
};
