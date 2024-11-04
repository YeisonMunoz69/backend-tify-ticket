"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateAdministradorDto = void 0;
const mapped_types_1 = require("@nestjs/mapped-types");
const create_admin_dto_1 = require("./create-admin.dto");
class UpdateAdministradorDto extends (0, mapped_types_1.PartialType)(create_admin_dto_1.CreateAdminDto) {
}
exports.UpdateAdministradorDto = UpdateAdministradorDto;
//# sourceMappingURL=update-admin.dto.js.map