import { JwtService } from '@nestjs/jwt';
import { AdminService } from '../admin/admin.service';
import { UserService } from '../userLogin/user.service';
export declare class AuthService {
    private readonly adminService;
    private readonly userService;
    private readonly jwtService;
    constructor(adminService: AdminService, userService: UserService, jwtService: JwtService);
    validateAdministrador(correo: string, password: string): Promise<any>;
    validateUser(correo: string, password: string): Promise<any>;
    login(user: any, rol: string): Promise<{
        access_token: string;
    }>;
}
