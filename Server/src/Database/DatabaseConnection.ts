import { Sequelize } from "sequelize";

export default class DatabaseConnection {

    private local: string = "[ DB-CONNECTION ]";
    private dbConfig: object;
    private sequelizeClient!: Sequelize;

    constructor (dbConfig: object) {
        this.dbConfig = dbConfig;
    }

    private Connect(): void {
        try {
            this.sequelizeClient = new Sequelize(this.dbConfig);
        } catch (error) {
            console.error(`${this.local} Failed trying to connect database: ${error}`);
            return;
        }
    }

    public GetClientSequelize(): Sequelize {
        return this.sequelizeClient;
    }

    public BuildConnection(): void {
        this.Connect();
    }
}