import { Sequelize, DataTypes, Model } from "sequelize";
import { CategoriesAttr } from "./InterfaceCategories";
import { CategoryCreationAttr } from "./InterfaceCategories";

export class CategoriesModel extends Model<CategoriesAttr, CategoryCreationAttr>{ }

export class CategoryModelInitializer {

    static initializeCategoryModel(sequelize: Sequelize): void {
        CategoriesModel.init({
            id: {
                type: DataTypes.INTEGER,
                allowNull: false,
                autoIncrement: true,
                primaryKey: true
            },
            name: {
                type: DataTypes.STRING(100),
                allowNull: false,
            },
            description: {
                type: DataTypes.TEXT,
                allowNull: true
            }
        }, { sequelize, modelName: "categories", tableName: "categories" })
    }
}