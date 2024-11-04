/*Aquí en este archivo se hace uso de la función SetMetadata que viene de la librería de NestJS y
se exportan dos constantes, una de ellas es ROLES_KEY que es igual a 'roles' y la otra es Roles que
es una función que recibe un número indeterminado de roles y retorna el resultado de la función
SetMetadata que recibe como primer argumento la constante ROLES_KEY y como segundo argumento
los roles que se pasaron como argumento a la función Roles*/
import { registerAs } from '@nestjs/config';
import { config as dotenvConfig } from 'dotenv';
import { DataSource, DataSourceOptions } from 'typeorm';

dotenvConfig({ path: '.env' });

const config = {
  type: 'postgres',
  host: `${process.env.DATABASE_HOST}`,
  port: `${process.env.DATABASE_PORT}`,
  username: `${process.env.DATABASE_USERNAME}`,
  password: `${process.env.DATABASE_PASSWORD}`,
  database: `${process.env.DATABASE_NAME}`,
  entities: [`'dist/**/*.entity{.ts,.js}'`],
  //migrations: [`'dist/migrations/*{.ts,.js}'`],
  autoLoadEntities: true,
  synchronize: true,
  logging: true,
  passwordEncryption: 'scram-sha-256',
};

export default registerAs('typeorm', () => config);
export const connectionSource = new DataSource(config as DataSourceOptions);
