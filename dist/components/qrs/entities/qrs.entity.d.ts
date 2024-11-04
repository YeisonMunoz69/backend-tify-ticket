import { Logs } from '../../logs/entities/logs.entity';
export declare class QRs {
    id: number;
    numQr: string;
    fechaCreacion: Date;
    status: number;
    extra: string;
    logs: string;
    logRecords: Logs[];
}
