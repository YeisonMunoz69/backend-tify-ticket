"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateQrsDto = void 0;
const mapped_types_1 = require("@nestjs/mapped-types");
const create_qrs_dto_1 = require("./create-qrs.dto");
class UpdateQrsDto extends (0, mapped_types_1.PartialType)(create_qrs_dto_1.CreateQrsDto) {
}
exports.UpdateQrsDto = UpdateQrsDto;
//# sourceMappingURL=update-qrs.dto.js.map