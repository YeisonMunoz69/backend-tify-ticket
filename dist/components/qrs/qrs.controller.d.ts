import { QrsService } from './qrs.service';
import { CreateQrsDto } from './dto/create-qrs.dto';
export declare class QrsController {
    private readonly qrsService;
    constructor(qrsService: QrsService);
    createQR(createQrsDto: CreateQrsDto, req: any): Promise<import("./entities/qrs.entity").QRs>;
    findAll(): Promise<import("./entities/qrs.entity").QRs[]>;
}
