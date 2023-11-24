import { Sequelize } from "sequelize";

export default class DatabaseConnection {

    private local: string = "[ DB-CONNECTION ]";
    private dbConfig: object;
    private sequelizeClient!: Sequelize;

    constructor (dbConfig: object) {
        this.dbConfig = dbConfig;
    }

    private connect(): void {
        try {
            this.sequelizeClient = new Sequelize(this.dbConfig);
            console.log(`${this.local} Connected.`);
        } catch (error) {
            console.error(`${this.local} Failed trying to connect database: ${error}`);
            return;
        }
    }

    public getClientSequelize(): Sequelize {
        return this.sequelizeClient;
    }

    public buildConnection(): void {
        this.connect();
    }
}