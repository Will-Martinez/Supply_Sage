import Server from "./ServerConfig/Server";

class ServerBuilder {

    private local: string = "[ SERVER-BUILDER ]";

    public startServer(port: number): void {

        const server: Server = new Server(port);
        server.Start();
    }
}

const serverBuilder: ServerBuilder = new ServerBuilder();
serverBuilder.startServer(3000);