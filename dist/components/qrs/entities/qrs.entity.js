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
exports.QRs = void 0;
const typeorm_1 = require("typeorm");
const logs_entity_1 = require("../../logs/entities/logs.entity");
let QRs = class QRs {
};
exports.QRs = QRs;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], QRs.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)({ unique: true }),
    __metadata("design:type", String)
], QRs.prototype, "numQr", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)(),
    __metadata("design:type", Date)
], QRs.prototype, "fechaCreacion", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'enum', enum: [0, 1, 2, 3, 4], default: 0 }),
    __metadata("design:type", Number)
], QRs.prototype, "status", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", String)
], QRs.prototype, "extra", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'text', nullable: true }),
    __metadata("design:type", String)
], QRs.prototype, "logs", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => logs_entity_1.Logs, (log) => log.qr),
    __metadata("design:type", Array)
], QRs.prototype, "logRecords", void 0);
exports.QRs = QRs = __decorate([
    (0, typeorm_1.Entity)('qrs')
], QRs);
//# sourceMappingURL=qrs.entity.js.map