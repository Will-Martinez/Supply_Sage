import express, { Express } from "express";
import DatabaseConfig from "../Database/DatabaseConfig";
import DatabaseConnection from "../Database/DatabaseConnection";
import ModelBuilder from "../Database/Models/ModelsBuilder";
import 'dotenv/config'
import { Sequelize } from "sequelize";

export default class Server {

    private port: number;
    private server: Express = express();
    private local: string = "[ SERVER-CONFIG ]";

    constructor (port: number) {
        this.port = port;
    }

    private StartModelsBuilder(sequelizeClient: Sequelize): void {
        const modelBuilder: ModelBuilder = new ModelBuilder(sequelizeClient);
        modelBuilder.BuildModels();
    }

    private connectDatabase(): void {
        const dbConfig: DatabaseConfig = DatabaseConfig.getDatabaseConfig();
        const connection: DatabaseConnection = new DatabaseConnection(dbConfig);
        const sequelizeClient: Sequelize = connection.GetClientSequelize();
        connection.BuildConnection();
        this.StartModelsBuilder(sequelizeClient);
    }

    private defineMiddlewares(): void {
        this.server.use(express.json());
    }

    private OpenServer(): void {
        this.server.listen(this.port, () => {
            console.log(`${this.local} Runing on port ${this.port}`);
        });
    }

    public Start(): void {
        this.connectDatabase();
        this.defineMiddlewares();
        this.OpenServer();
    }
}