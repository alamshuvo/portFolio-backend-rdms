"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.projectValidationSchema = exports.updateProjectValidation = exports.projectValidation = void 0;
const zod_1 = require("zod");
exports.projectValidation = zod_1.z.object({
    body: zod_1.z.object({
        adminId: zod_1.z.string().optional(),
        projectsName: zod_1.z.string({ required_error: "projectsName is required" }),
        liveLink: zod_1.z.string({ required_error: "liveLink is required" }),
        githubFrontendLink: zod_1.z.string().optional(),
        githubBackendLink: zod_1.z.string().optional(),
        projectPhoto: zod_1.z.string().optional(),
        backendLiveLink: zod_1.z.string().optional(),
        deployedIn: zod_1.z.string().optional(),
        description: zod_1.z.string({ required_error: "description is required" }),
    }),
});
exports.updateProjectValidation = zod_1.z.object({
    body: zod_1.z.object({
        adminId: zod_1.z.string().optional(),
        projectsName: zod_1.z.string().optional(),
        liveLink: zod_1.z.string().optional(),
        githubFrontendLink: zod_1.z.string().optional(),
        githubBackendLink: zod_1.z.string().optional(),
        projectPhoto: zod_1.z.string().optional(),
        backendLiveLink: zod_1.z.string().optional(),
        deployedIn: zod_1.z.string().optional(),
        description: zod_1.z.string().optional(),
    }),
});
exports.projectValidationSchema = {
    projectValidation: exports.projectValidation,
    updateProjectValidation: exports.updateProjectValidation
};
