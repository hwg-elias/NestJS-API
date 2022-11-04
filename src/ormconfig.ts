import { DataSource } from "typeorm";
import { PostgresConnectionOptions } from "typeorm/driver/postgres/PostgresConnectionOptions";
export const config: PostgresConnectionOptions = {
    type: 'postgres',
    host: 'localhost',
    port: 5432,
    username: 'mediumclone',
    password: '123',
    database: 'mediumclone',
    entities: [__dirname + '/**/*.entity{.ts,.js}'],
    synchronize: false,
    migrations: ['src/migrations/**/*{.ts,.js}'],
}
const AppDataSource = new DataSource(config);


export default AppDataSource;