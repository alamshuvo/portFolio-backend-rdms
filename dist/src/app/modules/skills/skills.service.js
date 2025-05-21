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
exports.skillsService = void 0;
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
    const skillsData = Object.assign(Object.assign({}, payload), { adminId: isAdminExist.id });
    const skillsDatas = yield prisma_1.prisma.skills.create({
        data: skillsData,
    });
    return skillsDatas;
});
const getAllSkills = () => __awaiter(void 0, void 0, void 0, function* () {
    const allData = yield prisma_1.prisma.skills.findMany({
        select: {
            id: true,
            title: true,
            description: true,
            photo: true,
            admin: true,
        },
    });
    return allData;
});
const getSingleSkills = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const skillsData = yield prisma_1.prisma.skills.findUnique({
        where: {
            id,
        },
    });
    return skillsData;
});
const deleteSingleSkills = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const skillsData = yield prisma_1.prisma.skills.delete({
        where: {
            id,
        },
    });
    return skillsData;
});
const updateSingleSkills = (id, payload) => __awaiter(void 0, void 0, void 0, function* () {
    const skillsData = yield prisma_1.prisma.skills.update({
        where: {
            id,
        },
        data: payload,
    });
    return skillsData;
});
exports.skillsService = {
    insertIntoDb,
    getAllSkills,
    getSingleSkills,
    deleteSingleSkills,
    updateSingleSkills,
};
