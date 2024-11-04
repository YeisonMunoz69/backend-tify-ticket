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
exports.QrsController = void 0;
const common_1 = require("@nestjs/common");
const qrs_service_1 = require("./qrs.service");
const create_qrs_dto_1 = require("./dto/create-qrs.dto");
const jwt_auth_guard_1 = require("../auth/guards/jwt-auth.guard");
const roles_decorator_1 = require("../../common/decorators/roles.decorator");
const roles_guard_1 = require("../../common/guards/roles.guard");
let QrsController = class QrsController {
    constructor(qrsService) {
        this.qrsService = qrsService;
    }
    async createQR(createQrsDto, req) {
        const user = req.user;
        if (!user || user.rol !== 'admin') {
            throw new common_1.UnauthorizedException('Solo administradores pueden crear nuevos QRs.');
        }
        return await this.qrsService.createQR(createQrsDto);
    }
    async findAll() {
        return await this.qrsService.findAll();
    }
};
exports.QrsController = QrsController;
__decorate([
    (0, common_1.Post)(),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard, roles_guard_1.RolesGuard),
    (0, roles_decorator_1.Roles)('admin'),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, common_1.Req)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_qrs_dto_1.CreateQrsDto, Object]),
    __metadata("design:returntype", Promise)
], QrsController.prototype, "createQR", null);
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], QrsController.prototype, "findAll", null);
exports.QrsController = QrsController = __decorate([
    (0, common_1.Controller)('qrs'),
    __metadata("design:paramtypes", [qrs_service_1.QrsService])
], QrsController);
//# sourceMappingURL=qrs.controller.js.map