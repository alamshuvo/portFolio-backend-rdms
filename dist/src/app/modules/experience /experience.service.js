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
exports.experienceService = void 0;
const prisma_1 = require("../../../shared/prisma");
const insertIntoDb = (payload, user) => __awaiter(void 0, void 0, void 0, function* () {
    const isAdminExist = yield prisma_1.prisma.admin.findFirstOrThrow({
        where: {
            email: user === null || user === void 0 ? void 0 : user.email,
        },
    });
    const ExperienceData = Object.assign(Object.assign({}, payload), { adminId: isAdminExist.id });
    const ExperienceDatas = yield prisma_1.prisma.experience.create({
        data: ExperienceData,
    });
    return ExperienceDatas;
});
const getAllExperience = () => __awaiter(void 0, void 0, void 0, function* () {
    const allData = yield prisma_1.prisma.experience.findMany({
        select: {
            id: true,
            companyLocation: true,
            companyName: true,
            role: true,
            admin: true,
        },
    });
    return allData;
});
const getSingleExperience = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const experienceData = yield prisma_1.prisma.experience.findUniqueOrThrow({
        where: {
            id,
        },
    });
    return experienceData;
});
const deleteSingleExperience = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const experienceData = yield prisma_1.prisma.experience.delete({
        where: {
            id,
        },
    });
    return experienceData;
});
const updateSingleExperience = (id, payload) => __awaiter(void 0, void 0, void 0, function* () {
    const experienceData = yield prisma_1.prisma.experience.update({
        where: {
            id,
        },
        data: payload,
    });
    return experienceData;
});
exports.experienceService = {
    insertIntoDb,
    getAllExperience,
    getSingleExperience,
    deleteSingleExperience,
    updateSingleExperience
};
