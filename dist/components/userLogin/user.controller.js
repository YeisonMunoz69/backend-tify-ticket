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
exports.UserController = void 0;
const common_1 = require("@nestjs/common");
const user_service_1 = require("./user.service");
const jwt_auth_guard_1 = require("../auth/guards/jwt-auth.guard");
const update_qrs_dto_1 = require("../qrs/dto/update-qrs.dto");
const logs_service_1 = require("../logs/logs.service");
const roles_guard_1 = require("../../common/guards/roles.guard");
let UserController = class UserController {
    constructor(userService, logsService) {
        this.userService = userService;
        this.logsService = logsService;
    }
    async checkTicket(numQr, req) {
        const user = req.user;
        if (!user) {
            throw new common_1.UnauthorizedException('Usuario no autenticado.');
        }
        const qrData = await this.userService.checkTicket(numQr);
        await this.logsService.createLog({
            idUserLogin: user.id,
            idQr: qrData.id,
            action: 'view',
            logs: JSON.stringify(qrData),
        });
        return qrData;
    }
    async updateTicket(numQr, updateQrsDto, req) {
        const user = req.user;
        if (!user) {
            throw new common_1.UnauthorizedException('Usuario no autenticado.');
        }
        const updatedQr = await this.userService.updateTicket(numQr, updateQrsDto);
        await this.userService.appendToQrLogs(numQr, updateQrsDto);
        return updatedQr;
    }
};
exports.UserController = UserController;
__decorate([
    (0, common_1.Get)('checkTicket/:numQr'),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard, roles_guard_1.RolesGuard),
    __param(0, (0, common_1.Param)('numQr')),
    __param(1, (0, common_1.Req)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object]),
    __metadata("design:returntype", Promise)
], UserController.prototype, "checkTicket", null);
__decorate([
    (0, common_1.Put)('updateTicket/:numQr'),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    __param(0, (0, common_1.Param)('numQr')),
    __param(1, (0, common_1.Body)()),
    __param(2, (0, common_1.Req)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_qrs_dto_1.UpdateQrsDto, Object]),
    __metadata("design:returntype", Promise)
], UserController.prototype, "updateTicket", null);
exports.UserController = UserController = __decorate([
    (0, common_1.Controller)('user'),
    __metadata("design:paramtypes", [user_service_1.UserService,
        logs_service_1.LogsService])
], UserController);
//# sourceMappingURL=user.controller.js.map