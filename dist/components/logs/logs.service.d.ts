import { Repository } from 'typeorm';
import { Logs } from './entities/logs.entity';
import { CreateLogsDto } from './dto/create-logs.dto';
import { QRs } from '../qrs/entities/qrs.entity';
export declare class LogsService {
    private logsRepository;
    private qrsRepository;
    constructor(logsRepository: Repository<Logs>, qrsRepository: Repository<QRs>);
    createLog(createLogsDto: CreateLogsDto): Promise<Logs>;
    findAll(): Promise<Logs[]>;
}
