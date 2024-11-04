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
exports.UserService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const qrs_entity_1 = require("../qrs/entities/qrs.entity");
const user_entity_1 = require("./entities/user.entity");
let UserService = class UserService {
    constructor(userLoginRepository, qrsRepository) {
        this.userLoginRepository = userLoginRepository;
        this.qrsRepository = qrsRepository;
    }
    async findByCorreo(correo) {
        return this.userLoginRepository.findOne({ where: { correo } });
    }
    async checkTicket(numQr) {
        const qr = await this.qrsRepository.findOne({ where: { numQr } });
        if (!qr) {
            throw new common_1.NotFoundException(`QR con número ${numQr} no encontrado.`);
        }
        return qr;
    }
    async updateTicket(numQr, updateQrsDto) {
        const qr = await this.qrsRepository.findOne({ where: { numQr } });
        if (!qr) {
            throw new common_1.NotFoundException(`QR con número ${numQr} no encontrado.`);
        }
        qr.status = updateQrsDto.status;
        await this.appendToQrLogs(numQr, updateQrsDto);
        return await this.qrsRepository.save(qr);
    }
    async appendToQrLogs(numQr, updateQrsDto) {
        const qr = await this.qrsRepository.findOne({ where: { numQr } });
        if (!qr) {
            throw new common_1.NotFoundException(`QR con número ${numQr} no encontrado.`);
        }
        const newLogEntry = `{"status":"${updateQrsDto.status}","dateHour":"${new Date().toISOString()}","extra":"${updateQrsDto.extra || ''}"}`;
        qr.logs = qr.logs ? `${qr.logs}, ${newLogEntry}` : newLogEntry;
        await this.qrsRepository.save(qr);
    }
};
exports.UserService = UserService;
exports.UserService = UserService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(user_entity_1.UserLogin)),
    __param(1, (0, typeorm_1.InjectRepository)(qrs_entity_1.QRs)),
    __metadata("design:paramtypes", [typeorm_2.Repository,
        typeorm_2.Repository])
], UserService);
//# sourceMappingURL=user.service.js.map