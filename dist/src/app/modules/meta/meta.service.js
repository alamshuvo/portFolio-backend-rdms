"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MetaDataService = void 0;
const client_1 = require("@prisma/client");
const prisma_1 = require("../../../shared/prisma");
const fetchDashboardMetaData = (user) => __awaiter(void 0, void 0, void 0, function* () {
    let metaData;
    switch (user === null || user === void 0 ? void 0 : user.role) {
        case client_1.UserRole.ADMIN:
            metaData = getAdminMetaData();
            break;
        default:
            throw new Error("Invalid user role");
    }
    return metaData;
});
const getAdminMetaData = () => __awaiter(void 0, void 0, void 0, function* () {
    const projectsCount = yield prisma_1.prisma.projects.count();
    const patientCount = yield prisma_1.prisma.skills.count();
    const experienceCount = yield prisma_1.prisma.experience.count();
    const blogsCount = yield prisma_1.prisma.blogs.count();
    const courseCount = yield prisma_1.prisma.course.count();
    return {
        projectsCount,
        patientCount,
        experienceCount,
        blogsCount,
        courseCount,
    };
});
// some code added
exports.MetaDataService = {
    fetchDashboardMetaData,
};
