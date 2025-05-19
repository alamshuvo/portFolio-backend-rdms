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
exports.blogsService = void 0;
const prisma_1 = require("../../../shared/prisma");
const insertIntoDb = (payload, user) => __awaiter(void 0, void 0, void 0, function* () {
    const isAdminExist = yield prisma_1.prisma.admin.findFirstOrThrow({
        where: {
            email: user === null || user === void 0 ? void 0 : user.email,
        },
    });
    const projectData = Object.assign(Object.assign({}, payload), { adminId: isAdminExist.id });
    const projectDatas = yield prisma_1.prisma.blogs.create({
        data: projectData,
    });
    return projectDatas;
});
const getAllblogs = () => __awaiter(void 0, void 0, void 0, function* () {
    const allData = yield prisma_1.prisma.blogs.findMany({
        select: {
            id: true,
            blogsName: true,
            title: true,
            description: true,
            photo: true,
            externalLink: true,
            admin: true,
        },
    });
    return allData;
});
const getSingleblogs = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const projectData = yield prisma_1.prisma.blogs.findUniqueOrThrow({
        where: {
            id,
        },
    });
    return projectData;
});
const deleteBlogs = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const projectData = yield prisma_1.prisma.blogs.delete({
        where: {
            id,
        },
    });
    return projectData;
});
const updateBlogs = (id, payload) => __awaiter(void 0, void 0, void 0, function* () {
    const projectData = yield prisma_1.prisma.blogs.update({
        where: {
            id,
        },
        data: payload,
    });
    return projectData;
});
exports.blogsService = {
    insertIntoDb,
    getAllblogs,
    getSingleblogs,
    deleteBlogs,
    updateBlogs
};
