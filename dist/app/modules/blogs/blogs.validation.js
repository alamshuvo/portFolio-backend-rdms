"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.blogsValidationSchema = exports.updateblogValidation = exports.blogValidation = void 0;
const zod_1 = require("zod");
exports.blogValidation = zod_1.z.object({
    body: zod_1.z.object({
        adminId: zod_1.z.string().optional(),
        blogsName: zod_1.z.string({ required_error: "blogsName is required" }),
        title: zod_1.z.string({ required_error: "title is required" }),
        description: zod_1.z.string({ required_error: "description is required" }),
        photo: zod_1.z.string().optional(),
        externalLink: zod_1.z.string().optional(),
    }),
});
exports.updateblogValidation = zod_1.z.object({
    body: zod_1.z.object({
        adminId: zod_1.z.string().optional(),
        blogsName: zod_1.z.string().optional(),
        title: zod_1.z.string().optional(),
        description: zod_1.z.string().optional(),
        photo: zod_1.z.string().optional(),
        externalLink: zod_1.z.string().optional(),
    }),
});
exports.blogsValidationSchema = {
    blogValidation: exports.blogValidation,
    updateblogValidation: exports.updateblogValidation
};
