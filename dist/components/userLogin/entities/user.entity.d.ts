import { Logs } from '../../logs/entities/logs.entity';
export declare class UserLogin {
    id: number;
    nombre: string;
    correo: string;
    password: string;
    logs: Logs[];
}
