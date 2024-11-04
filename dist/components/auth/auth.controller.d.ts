import { AuthService } from './auth.service';
import { AdminService } from '../admin/admin.service';
import { UserService } from '../userLogin/user.service';
export declare class AuthController {
    private readonly authService;
    private readonly adminService;
    private readonly userService;
    constructor(authService: AuthService, adminService: AdminService, userService: UserService);
    login(body: {
        correo: string;
        password: string;
    }): Promise<{
        access_token: string;
    }>;
    loginUser(body: {
        correo: string;
        password: string;
    }): Promise<{
        access_token: string;
    }>;
}
