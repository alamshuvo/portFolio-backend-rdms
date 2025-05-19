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
exports.skillsService = void 0;
const prisma_1 = require("../../../shared/prisma");
const insertIntoDb = (payload, user) => __awaiter(void 0, void 0, void 0, function* () {
    const isAdminExist = yield prisma_1.prisma.admin.findFirstOrThrow({
        where: {
            email: user === null || user === void 0 ? void 0 : user.email,
        },
    });
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
    const skillsData = yield prisma_1.prisma.skills.findUniqueOrThrow({
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
