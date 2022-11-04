import { DataSource } from "typeorm";
import { PostgresConnectionOptions } from "typeorm/driver/postgres/PostgresConnectionOptions";
import { env } from "process";

export const config: PostgresConnectionOptions = {
    type: 'postgres',
    host: env.DB_HOST,
    port: +env.DB_PORT,
    username: env.DB_USERNAME,
    password: env.DB_PASSWORD,
    database: env.DB_NAME,
    entities: [__dirname + '/**/*.entity{.ts,.js}'],
    synchronize: false,
    migrations: ['src/migrations/**/*{.ts,.js}'],
}
const AppDataSource = new DataSource(config);


export default AppDataSource;