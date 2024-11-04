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
exports.AdminService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const admin_entity_1 = require("./entities/admin.entity");
const user_entity_1 = require("../userLogin/entities/user.entity");
const bcrypt = require("bcryptjs");
let AdminService = class AdminService {
    constructor(adminRepository, userLoginRepository) {
        this.adminRepository = adminRepository;
        this.userLoginRepository = userLoginRepository;
    }
    async hasAdmins() {
        const count = await this.adminRepository.count();
        return count > 0;
    }
    async createAdmin(createAdminDto) {
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(createAdminDto.password, salt);
        const admin = this.adminRepository.create({
            ...createAdminDto,
            password: hashedPassword,
        });
        return this.adminRepository.save(admin);
    }
    async createUserForAdmin(createUserLoginDto) {
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(createUserLoginDto.password, salt);
        const newUser = this.userLoginRepository.create({
            ...createUserLoginDto,
            password: hashedPassword,
        });
        return await this.userLoginRepository.save(newUser);
    }
    async findByCorreo(correo) {
        return this.adminRepository.findOne({ where: { correo } });
    }
};
exports.AdminService = AdminService;
exports.AdminService = AdminService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(admin_entity_1.Admin)),
    __param(1, (0, typeorm_1.InjectRepository)(user_entity_1.UserLogin)),
    __metadata("design:paramtypes", [typeorm_2.Repository,
        typeorm_2.Repository])
], AdminService);
//# sourceMappingURL=admin.service.js.map