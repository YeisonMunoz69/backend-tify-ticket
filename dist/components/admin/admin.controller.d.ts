import { AdminService } from './admin.service';
import { CreateAdminDto } from './dto/create-admin.dto';
import { CreateUserLoginDto } from '../userLogin/dto/create-user.dto';
export declare class AdminController {
    private readonly adminService;
    constructor(adminService: AdminService);
    registerFirstAdmin(createAdminDto: CreateAdminDto): Promise<import("./entities/admin.entity").Admin>;
    newUserForAdmin(createUserLoginDto: CreateUserLoginDto, req: any): Promise<import("../userLogin/entities/user.entity").UserLogin>;
}
