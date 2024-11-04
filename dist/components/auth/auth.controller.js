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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthController = void 0;
const common_1 = require("@nestjs/common");
const auth_service_1 = require("./auth.service");
const admin_service_1 = require("../admin/admin.service");
const user_service_1 = require("../userLogin/user.service");
let AuthController = class AuthController {
    constructor(authService, adminService, userService) {
        this.authService = authService;
        this.adminService = adminService;
        this.userService = userService;
    }
    async login(body) {
        const admin = await this.authService.validateAdministrador(body.correo, body.password);
        if (!admin) {
            throw new common_1.UnauthorizedException('Correo o contraseña incorrectos');
        }
        return this.authService.login(admin, 'admin');
    }
    async loginUser(body) {
        const user = await this.authService.validateUser(body.correo, body.password);
        if (!user) {
            throw new common_1.UnauthorizedException('Correo o contraseña incorrectos');
        }
        return this.authService.login(user, 'user');
    }
};
exports.AuthController = AuthController;
__decorate([
    (0, common_1.Post)('login'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], AuthController.prototype, "login", null);
__decorate([
    (0, common_1.Post)('loginUser'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], AuthController.prototype, "loginUser", null);
exports.AuthController = AuthController = __decorate([
    (0, common_1.Controller)('auth'),
    __metadata("design:paramtypes", [auth_service_1.AuthService,
        admin_service_1.AdminService,
        user_service_1.UserService])
], AuthController);
//# sourceMappingURL=auth.controller.js.map