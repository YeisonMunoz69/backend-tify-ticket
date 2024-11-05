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
exports.LogsService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const logs_entity_1 = require("./entities/logs.entity");
const qrs_entity_1 = require("../qrs/entities/qrs.entity");
let LogsService = class LogsService {
    constructor(logsRepository, qrsRepository) {
        this.logsRepository = logsRepository;
        this.qrsRepository = qrsRepository;
    }
    async createLog(createLogsDto) {
        const qr = await this.qrsRepository.findOne({
            where: { id: createLogsDto.idQr },
        });
        if (!qr) {
            throw new Error(`QR con id ${createLogsDto.idQr} no encontrado.`);
        }
        const logEntry = this.logsRepository.create({
            user: createLogsDto.idUserLogin
                ? { id: createLogsDto.idUserLogin }
                : null,
            admin: createLogsDto.idAdmin ? { id: createLogsDto.idAdmin } : null,
            qr: { id: createLogsDto.idQr },
            action: createLogsDto.action,
            logs: `QR Info: numQr=${qr.numQr}, status=${qr.status}, extra=${qr.extra || 'N/A'}`,
        });
        return await this.logsRepository.save(logEntry);
    }
    async findAll() {
        return await this.logsRepository.find({
            relations: ['user', 'admin', 'qr'],
        });
    }
};
exports.LogsService = LogsService;
exports.LogsService = LogsService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(logs_entity_1.Logs)),
    __param(1, (0, typeorm_1.InjectRepository)(qrs_entity_1.QRs)),
    __metadata("design:paramtypes", [typeorm_2.Repository,
        typeorm_2.Repository])
], LogsService);
//# sourceMappingURL=logs.service.js.map