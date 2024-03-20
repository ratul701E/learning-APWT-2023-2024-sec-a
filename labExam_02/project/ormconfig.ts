import { UserEntity } from 'src/entities/user.entity';
import { PostgresConnectionOptions } from 'typeorm/driver/postgres/PostgresConnectionOptions';

const config: PostgresConnectionOptions = {
  type: 'postgres',
  database: 'labtask02',
  host: 'localhost',
  port: 5432,
  username: 'postgres',
  password: 'postgre',
  entities: [UserEntity],
  synchronize: false,
};

export default config;
