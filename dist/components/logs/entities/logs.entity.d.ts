import { QRs } from '../../qrs/entities/qrs.entity';
import { UserLogin } from '../../userLogin/entities/user.entity';
import { Admin } from '../../admin/entities/admin.entity';
export declare class Logs {
    id: number;
    user: UserLogin;
    admin: Admin;
    qr: QRs;
    fechaIngreso: Date;
    action: string;
    logs: string;
}
