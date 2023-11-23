import express, { Express } from "express";

export default class Server {

    private port: number;
    private server: Express = express();
    private local: string = "[ SERVER-CONFIG ]";

    constructor (port: number) {
        this.port = port;
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
        this.defineMiddlewares();
        this.OpenServer();
    }
}