import { LogsService } from './logs.service';
export declare class LogsController {
    private readonly logsService;
    constructor(logsService: LogsService);
    findAll(): Promise<import("./entities/logs.entity").Logs[]>;
}
