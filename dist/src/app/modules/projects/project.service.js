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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.projectService = void 0;
const prisma_1 = require("../../../shared/prisma");
const apiError_1 = __importDefault(require("../../errors/apiError"));
const http_status_1 = __importDefault(require("http-status"));
const insertIntoDb = (payload, user) => __awaiter(void 0, void 0, void 0, function* () {
    const isAdminExist = yield prisma_1.prisma.admin.findUnique({
        where: {
            email: user === null || user === void 0 ? void 0 : user.email,
        },
    });
    if (!isAdminExist) {
        throw new apiError_1.default(http_status_1.default.NOT_FOUND, "admin Does not exist");
    }
    const projectData = Object.assign(Object.assign({}, payload), { adminId: isAdminExist.id });
    const projectDatas = yield prisma_1.prisma.projects.create({
        data: projectData,
    });
    return projectDatas;
});
const getAllProjects = () => __awaiter(void 0, void 0, void 0, function* () {
    const allData = yield prisma_1.prisma.projects.findMany({
        select: {
            id: true,
            projectsName: true,
            liveLink: true,
            githubFrontendLink: true,
            githubBackendLink: true,
            projectPhoto: true,
            backendLiveLink: true,
            deployedIn: true,
            description: true,
            admin: true,
        },
    });
    return allData;
});
const getSingleProject = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const projectData = yield prisma_1.prisma.projects.findUnique({
        where: {
            id,
        },
    });
    return projectData;
});
const deleteSingleProject = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const projectData = yield prisma_1.prisma.projects.delete({
        where: {
            id,
        },
    });
    return projectData;
});
const updateSingleProject = (id, payload) => __awaiter(void 0, void 0, void 0, function* () {
    const projectData = yield prisma_1.prisma.projects.update({
        where: {
            id,
        },
        data: payload,
    });
    return projectData;
});
exports.projectService = {
    insertIntoDb,
    getAllProjects,
    getSingleProject,
    deleteSingleProject,
    updateSingleProject,
};
