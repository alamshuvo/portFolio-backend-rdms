"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.skillValidationSchema = exports.updateSkillValidation = exports.skillValidation = void 0;
const zod_1 = require("zod");
exports.skillValidation = zod_1.z.object({
    body: zod_1.z.object({
        adminId: zod_1.z.string().optional(),
        title: zod_1.z.string({ required_error: "title is required" }),
        description: zod_1.z.string({ required_error: "description is required" }),
        photo: zod_1.z.string().optional(),
    }),
});
exports.updateSkillValidation = zod_1.z.object({
    body: zod_1.z.object({
        adminId: zod_1.z.string().optional(),
        title: zod_1.z.string().optional(),
        description: zod_1.z.string().optional(),
        photo: zod_1.z.string().optional(),
    }),
});
exports.skillValidationSchema = {
    skillValidation: exports.skillValidation,
    updateSkillValidation: exports.updateSkillValidation
};
