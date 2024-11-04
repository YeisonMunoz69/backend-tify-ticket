"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.api = void 0;
const api = {
    quotaApi: {
        uri: process.env.QUOTAS_API_URI || '',
        user: process.env.QUOTAS_USER || '',
        password: process.env.QUOTAS_PASS || '',
    },
};
exports.api = api;
//# sourceMappingURL=configApp.js.map