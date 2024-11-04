import { Repository } from 'typeorm';
import { QRs } from '../qrs/entities/qrs.entity';
import { UpdateQrsDto } from '../qrs/dto/update-qrs.dto';
import { UserLogin } from './entities/user.entity';
export declare class UserService {
    private userLoginRepository;
    private qrsRepository;
    constructor(userLoginRepository: Repository<UserLogin>, qrsRepository: Repository<QRs>);
    findByCorreo(correo: string): Promise<UserLogin | undefined>;
    checkTicket(numQr: string): Promise<QRs>;
    updateTicket(numQr: string, updateQrsDto: UpdateQrsDto): Promise<QRs>;
    appendToQrLogs(numQr: string, updateQrsDto: UpdateQrsDto): Promise<void>;
}
