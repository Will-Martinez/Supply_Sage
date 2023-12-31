import { ProductModelInitializer } from "./Entities/Products/Products";
import { CategoryModelInitializer } from "./Entities/Categories/Categories";
import { Sequelize } from "sequelize";

export default class ModelsInitializer {
    private local: string = "[ MODEL-BUILD ]";
    private sequelizeClient: Sequelize;

    constructor (sequelizeClient: Sequelize) {
        this.sequelizeClient = sequelizeClient
    }

    private initialize(): void {
        ProductModelInitializer.initializeProductModel(this.sequelizeClient);
        CategoryModelInitializer.initializeCategoryModel(this.sequelizeClient);
    }

    public initializeModels(): void {
        this.initialize();
    }
}