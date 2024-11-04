import { DataSource } from 'typeorm';
declare const _default: (() => {
    type: string;
    host: string;
    port: string;
    username: string;
    password: string;
    database: string;
    entities: string[];
    autoLoadEntities: boolean;
    synchronize: boolean;
    logging: boolean;
    passwordEncryption: string;
}) & import("@nestjs/config").ConfigFactoryKeyHost<{
    type: string;
    host: string;
    port: string;
    username: string;
    password: string;
    database: string;
    entities: string[];
    autoLoadEntities: boolean;
    synchronize: boolean;
    logging: boolean;
    passwordEncryption: string;
}>;
export default _default;
export declare const connectionSource: DataSource;
