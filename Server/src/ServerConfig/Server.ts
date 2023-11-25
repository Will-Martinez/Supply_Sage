import express, { Express } from "express";
import DatabaseConfig from "../Database/DatabaseConfig";
import DatabaseConnection from "../Database/DatabaseConnection";
import ModelsInitializer from "../Database/Models/ModelsInitializer";
import ProductRoutes from "../API/Routes/ProductRoutes";
import cors from "cors";
import 'dotenv/config'
import { Sequelize } from "sequelize";

const productRoutes: ProductRoutes = new ProductRoutes();

export default class Server {

    private port: number;
    private server: Express = express();
    private local: string = "[ SERVER-CONFIG ]";

    constructor (port: number) {
        this.port = port;
    }

    private startModelsInitializer(sequelizeClient: Sequelize): void {
        const modelInitializer: ModelsInitializer = new ModelsInitializer(sequelizeClient);
        modelInitializer.initializeModels();
    }

    private connectDatabase(): void {
        const dbConfig: object = DatabaseConfig.getDatabaseConfig();
        const connection: DatabaseConnection = new DatabaseConnection(dbConfig);
        connection.buildConnection();
        const sequelizeClient: Sequelize = connection.getClientSequelize();
        this.startModelsInitializer(sequelizeClient);
    }

    private defineMiddlewares(): void {
        this.server.use(express.json());
        this.server.use(cors());
        this.server.use(productRoutes.MapRoutes());
    }

    private openServer(): void {
        this.server.listen(this.port, () => {
            console.log(`${this.local} Runing on port ${this.port}`);
        });
    }

    public Start(): void {
        this.connectDatabase();
        this.defineMiddlewares();
        this.openServer();
    }
}