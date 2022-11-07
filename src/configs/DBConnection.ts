import {TypeOrmModule} from "@nestjs/typeorm";
import { Sales } from "src/entities/sales.entity";
import { User } from "src/entities/user.entity";
import { Details } from 'src/entities/details.entity';

export const Connection = TypeOrmModule.forRoot({
    type: 'mysql',
    host: process.env.DB_HOST,
    port: Number(process.env.DB_PORT),
    username: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    entities: [User, Sales, Details],
    synchronize: true
})