import { Sequelize, DataTypes, Model } from "sequelize";
import { ProductsAttr } from "./InterfaceProducts";
import { ProductCreationAttr } from "./InterfaceProducts";

const local: string = "[ PRODUCT-MODEL ]";

export class ProductModel extends Model<ProductsAttr, ProductCreationAttr> {};

export class ProductModelInitializer {

    static initializeProductModel(sequelize: Sequelize): void {
        ProductModel.init({
            id: {
                type: DataTypes.INTEGER,
                allowNull: false,
                autoIncrement: true,
                primaryKey: true
            },
            category: {
                type: DataTypes.STRING(100),
                allowNull: false,
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
        }, { sequelize, modelName: "products", tableName: "products" })
    }
}