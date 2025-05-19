"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.experienceValidationSchema = exports.updateexperienceValidation = exports.experienceValidation = void 0;
const zod_1 = require("zod");
exports.experienceValidation = zod_1.z.object({
    body: zod_1.z.object({
        adminId: zod_1.z.string().optional(),
        companyLocation: zod_1.z.string().optional(),
        companyName: zod_1.z.string().optional(),
        role: zod_1.z.string().optional(),
    }),
});
exports.updateexperienceValidation = zod_1.z.object({
    body: zod_1.z.object({
        adminId: zod_1.z.string().optional(),
        companyLocation: zod_1.z.string().optional(),
        companyName: zod_1.z.string().optional(),
        role: zod_1.z.string().optional(),
    }),
});
exports.experienceValidationSchema = {
    experienceValidation: exports.experienceValidation,
    updateexperienceValidation: exports.updateexperienceValidation
};
