import Server from "./ServerConfig/Server";

class ServerBuilder {

    private local: string = "[ SERVER-BUILDER ]";

    public StartServer(port: number): void {

        const server: Server = new Server(port);
        server.Start();
    }
}

const serverBuilder: ServerBuilder = new ServerBuilder();
serverBuilder.StartServer(3000);