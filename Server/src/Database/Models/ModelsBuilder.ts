import { ProductModelInitializer } from "./Entities/Products/Products";
import { Sequelize } from "sequelize";

export default class ModelBuilder {
    private local: string = "[ MODEL-BUILD ]";
    private sequelizeClient: Sequelize;

    constructor (sequelizeClient: Sequelize) {
        this.sequelizeClient = sequelizeClient
    }

    private StartBuilder(): void {
        ProductModelInitializer.InitializeUserModel(this.sequelizeClient);
    }

    public BuildModels(): void {
        this.StartBuilder();
    }
}