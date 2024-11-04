"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthService = void 0;
const common_1 = require("@nestjs/common");
const jwt_1 = require("@nestjs/jwt");
const admin_service_1 = require("../admin/admin.service");
const user_service_1 = require("../userLogin/user.service");
const bcrypt = require("bcryptjs");
let AuthService = class AuthService {
    constructor(adminService, userService, jwtService) {
        this.adminService = adminService;
        this.userService = userService;
        this.jwtService = jwtService;
    }
    async validateAdministrador(correo, password) {
        const admin = await this.adminService.findByCorreo(correo);
        if (admin && (await bcrypt.compare(password, admin.password))) {
            const { password, ...result } = admin;
            return result;
        }
        return null;
    }
    async validateUser(correo, password) {
        const user = await this.userService.findByCorreo(correo);
        if (user && (await bcrypt.compare(password, user.password))) {
            const { password, ...result } = user;
            return result;
        }
        return null;
    }
    async login(user, rol) {
        const payload = {
            correo: user.correo,
            sub: user.id,
            rol: rol,
        };
        return {
            access_token: this.jwtService.sign(payload),
        };
    }
};
exports.AuthService = AuthService;
exports.AuthService = AuthService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [admin_service_1.AdminService,
        user_service_1.UserService,
        jwt_1.JwtService])
], AuthService);
//# sourceMappingURL=auth.service.js.map