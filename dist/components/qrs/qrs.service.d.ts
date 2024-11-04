import { Repository } from 'typeorm';
import { QRs } from './entities/qrs.entity';
import { CreateQrsDto } from './dto/create-qrs.dto';
export declare class QrsService {
    private qrsRepository;
    constructor(qrsRepository: Repository<QRs>);
    createQR(createQrsDto: CreateQrsDto): Promise<QRs>;
    findAll(): Promise<QRs[]>;
}
