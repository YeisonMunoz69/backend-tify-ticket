import { Logs } from '../../logs/entities/logs.entity';
export declare class Admin {
    id: number;
    nombre: string;
    correo: string;
    password: string;
    logs: Logs[];
}
