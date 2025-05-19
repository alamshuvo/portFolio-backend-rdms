"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.courseValidationSchema = exports.updateCourseValidation = exports.courseValidation = void 0;
const zod_1 = require("zod");
exports.courseValidation = zod_1.z.object({
    body: zod_1.z.object({
        adminId: zod_1.z.string().optional(),
        courseName: zod_1.z.string({ required_error: "courseName is required" }),
        duration: zod_1.z.string().optional(),
        certificate: zod_1.z.string().optional(),
    }),
});
exports.updateCourseValidation = zod_1.z.object({
    body: zod_1.z.object({
        adminId: zod_1.z.string().optional(),
        courseName: zod_1.z.string().optional(),
        duration: zod_1.z.string().optional(),
        certificate: zod_1.z.string().optional(),
    }),
});
exports.courseValidationSchema = {
    courseValidation: exports.courseValidation,
    updateCourseValidation: exports.updateCourseValidation
};
