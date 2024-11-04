import { UserService } from './user.service';
import { UpdateQrsDto } from '../qrs/dto/update-qrs.dto';
import { LogsService } from '../logs/logs.service';
export declare class UserController {
    private readonly userService;
    private readonly logsService;
    constructor(userService: UserService, logsService: LogsService);
    checkTicket(numQr: string, req: any): Promise<import("../qrs/entities/qrs.entity").QRs>;
    updateTicket(numQr: string, updateQrsDto: UpdateQrsDto, req: any): Promise<import("../qrs/entities/qrs.entity").QRs>;
}
