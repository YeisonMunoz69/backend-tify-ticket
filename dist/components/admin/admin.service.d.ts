import { Repository } from 'typeorm';
import { CreateAdminDto } from './dto/create-admin.dto';
import { Admin } from './entities/admin.entity';
import { CreateUserLoginDto } from '../userLogin/dto/create-user.dto';
import { UserLogin } from '../userLogin/entities/user.entity';
export declare class AdminService {
    private adminRepository;
    private userLoginRepository;
    constructor(adminRepository: Repository<Admin>, userLoginRepository: Repository<UserLogin>);
    hasAdmins(): Promise<boolean>;
    createAdmin(createAdminDto: CreateAdminDto): Promise<Admin>;
    createUserForAdmin(createUserLoginDto: CreateUserLoginDto): Promise<UserLogin>;
    findByCorreo(correo: string): Promise<Admin | undefined>;
}
