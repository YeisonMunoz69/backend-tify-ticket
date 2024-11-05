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
exports.Logs = void 0;
const typeorm_1 = require("typeorm");
const qrs_entity_1 = require("../../qrs/entities/qrs.entity");
const user_entity_1 = require("../../userLogin/entities/user.entity");
const admin_entity_1 = require("../../admin/entities/admin.entity");
let Logs = class Logs {
};
exports.Logs = Logs;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], Logs.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => user_entity_1.UserLogin, (user) => user.logs, { nullable: true }),
    __metadata("design:type", user_entity_1.UserLogin)
], Logs.prototype, "user", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => admin_entity_1.Admin, (admin) => admin.logs, { nullable: true }),
    __metadata("design:type", admin_entity_1.Admin)
], Logs.prototype, "admin", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => qrs_entity_1.QRs, (qr) => qr.logRecords),
    __metadata("design:type", qrs_entity_1.QRs)
], Logs.prototype, "qr", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)(),
    __metadata("design:type", Date)
], Logs.prototype, "fechaIngreso", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Logs.prototype, "action", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'text', nullable: true }),
    __metadata("design:type", String)
], Logs.prototype, "logs", void 0);
exports.Logs = Logs = __decorate([
    (0, typeorm_1.Entity)('logs')
], Logs);
//# sourceMappingURL=logs.entity.js.map