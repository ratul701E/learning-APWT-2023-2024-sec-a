import { ProductEntity } from 'src/entities/product.entity';
import { UserEntity } from 'src/entities/user.entity';
import { PostgresConnectionOptions } from 'typeorm/driver/postgres/PostgresConnectionOptions';

const config: PostgresConnectionOptions = {
  type: 'postgres',
  database: 'FinalLab',
  host: 'localhost',
  port: 5432,
  username: 'postgres',
  password: 'postgre',
  entities: [UserEntity, ProductEntity],
  synchronize: true,
};

export default config;