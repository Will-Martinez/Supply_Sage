export default class DatabaseConfig {

    public static getDatabaseConfig(): object {
        return {
            dialect: process.env.DIALECT,
            host: process.env.LOCAL_DB_URL,
            username: process.env.DB_USER,
            password: process.env.PASSWORD,
            database: process.env.DB_NAME,
            logging: false,
            define: {
                timestamps: true,
            }
        }
    }
}