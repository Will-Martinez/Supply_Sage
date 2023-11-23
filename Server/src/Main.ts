import Server from "./Config/Server";

class AppBuilder {

    private local: string = "[ APP-BUILDER ]";

    public StartServer(port: number): void {

        const server: Server = new Server(port);
        server.Start();
    }
}

const app: AppBuilder = new AppBuilder();
app.StartServer(3000);